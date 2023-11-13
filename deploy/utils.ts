import { Provider, Wallet } from "zksync-web3";
import * as hre from "hardhat";
import { Deployer } from "@matterlabs/hardhat-zksync-deploy";
import dotenv from "dotenv";
import { Interface, formatEther } from "ethers/lib/utils";
import { BigNumberish, ethers } from "ethers";
import fs from "fs";

import "@matterlabs/hardhat-zksync-node/dist/type-extensions";
import "@matterlabs/hardhat-zksync-verify/dist/src/type-extensions";
import { ZkSyncArtifact } from "@matterlabs/hardhat-zksync-deploy/dist/types";

// Load env file
dotenv.config();

export const getProvider = () => {
  const rpcUrl = hre.network.config.url;
  if (!rpcUrl) throw `⛔️ RPC URL wasn't found in "${hre.network.name}"! Please add a "url" field to the network config in hardhat.config.ts`;
  
  // Initialize zkSync Provider
  const provider = new Provider(rpcUrl);

  return provider;
}

export const getWallet = (privateKey?: string) => {
  if (!privateKey) {
    // Get wallet private key from .env file
    if (!process.env.WALLET_PRIVATE_KEY) throw "⛔️ Wallet private key wasn't found in .env file!";
  }

  const provider = getProvider();
  
  // Initialize zkSync Wallet
  const wallet = new Wallet(privateKey ?? process.env.WALLET_PRIVATE_KEY!, provider);

  return wallet;
}

export const verifyEnoughBalance = async (wallet: Wallet, amount: BigNumberish) => {
  // Check if the wallet has enough balance
  const balance = await wallet.getBalance();
  if (balance.lt(amount)) throw `⛔️ Wallet balance is too low! Required ${formatEther(amount)} ETH, but current ${wallet.address} balance is ${formatEther(balance)} ETH`;
}

/**
 * @param {string} data.contract The contract's path and name. E.g., "contracts/Greeter.sol:Greeter"
 */
export const verifyContract = async (data: {
  address: string,
  contract: string,
  constructorArguments: string,
  bytecode: string
}) => {
  const verificationRequestId: number = await hre.run("verify:verify", {
    ...data,
    noCompile: true,
  });
  return verificationRequestId;
}

type DeployContractOptions = {
  /**
   * If true, the deployment process will not print any logs
   */
  silent?: boolean
  /**
   * If true, the contract will not be verified on Block Explorer
   */
  noVerify?: boolean
  /**
   * If specified, the contract will be deployed using this wallet
   */ 
  wallet?: Wallet
}
export const deployContract = async (deployer: Deployer, wallet: Wallet, contractArtifactName: string, constructorArguments?: any[], options?: DeployContractOptions) => {
  const log = (message: string) => {
    if (!options?.silent) console.log(message);
  }

  log(`\nStarting deployment process of "${contractArtifactName}"...`);
  
  const artifact = await deployer.loadArtifact(contractArtifactName).catch((error) => {
    if (error?.message?.includes(`Artifact for contract "${contractArtifactName}" not found.`)) {
      console.error(error.message);
      throw `⛔️ Please make sure you have compiled your contracts or specified the correct contract name!`;
    } else {
      throw error;
    }
  });

  // Estimate contract deployment fee
  const deploymentFee = await deployer.estimateDeployFee(artifact, constructorArguments || []);
  log(`Estimated deployment cost: ${formatEther(deploymentFee)} ETH`);

  // Check if the wallet has enough balance
  await verifyEnoughBalance(wallet, deploymentFee);

  // Deploy the contract to zkSync
  const contract = await deployer.deploy(artifact, constructorArguments);

  const constructorArgs = contract.interface.encodeDeploy(constructorArguments);
  const fullContractSource = `${artifact.sourceName}:${artifact.contractName}`;

  // Display contract deployment info
  log(`\n"${artifact.contractName}" was successfully deployed:`);
  log(` - Contract address: ${contract.address}`);
  log(` - Contract source: ${fullContractSource}`);
  log(` - Encoded constructor arguments: ${constructorArgs}\n`);

  if (!options?.noVerify && hre.network.config.verifyURL) {
    log(`Requesting contract verification...`);
    await verifyContract({
      address: contract.address,
      contract: fullContractSource,
      constructorArguments: constructorArgs,
      bytecode: artifact.bytecode,
    });
  }

  return contract;
}

export function getAllSelectors(contractInterface: Interface) {
  return Object.keys(contractInterface.functions)
    .filter((signature) => {
      return signature !== "getName()";
    })
    .map((signature) => contractInterface.getSighash(signature));
}

export function hashL2Bytecode(bytecode: ethers.BytesLike): Uint8Array {
  // For getting the consistent length we first convert the bytecode to UInt8Array
  const bytecodeAsArray = ethers.utils.arrayify(bytecode);

  if (bytecodeAsArray.length % 32 != 0) {
      throw new Error('The bytecode length in bytes must be divisible by 32');
  }

  const hashStr = ethers.utils.sha256(bytecodeAsArray);
  const hash = ethers.utils.arrayify(hashStr);

  // Note that the length of the bytecode
  // should be provided in 32-byte words.
  const bytecodeLengthInWords = bytecodeAsArray.length / 32;
  if (bytecodeLengthInWords % 2 == 0) {
      throw new Error('Bytecode length in 32-byte words must be odd');
  }
  const bytecodeLength = ethers.utils.arrayify(bytecodeAsArray.length / 32);
  if (bytecodeLength.length > 2) {
      throw new Error('Bytecode length must be less than 2^16 bytes');
  }
  // The bytecode should always take the first 2 bytes of the bytecode hash,
  // so we pad it from the left in case the length is smaller than 2 bytes.
  const bytecodeLengthPadded = ethers.utils.zeroPad(bytecodeLength, 2);

  const codeHashVersion = new Uint8Array([1, 0]);
  hash.set(codeHashVersion, 0);
  hash.set(bytecodeLengthPadded, 2);

  return hash;
}

export function readBlockBootloaderBytecode() {
  return fs.readFileSync("era-test-node/src/deps/contracts/proved_block.yul.zbin");
}

export function readSystemContractsBytecode(fileName: string) {
  const artifact = fs.readFileSync(
      `era-test-node/src/deps/contracts/${fileName}.json`
  );
  return JSON.parse(artifact.toString()).bytecode;
}

export async function loadArtifact(deployer: Deployer, contractArtifactName: string): Promise<ZkSyncArtifact> {
  return deployer.loadArtifact("L2ERC20Bridge").catch((error) => {
      if (error?.message?.includes(`Artifact for contract "${"L2ERC20Bridge"}" not found.`)) {
          console.error(error.message);
          throw `⛔️ Please make sure you have compiled your contracts or specified the correct contract name!`;
      } else {
          throw error;
      }
  });
}

export async function readBytecode(deployer: Deployer, contractArtifactName: string): Promise<string> {
  let artifact = await loadArtifact(deployer, contractArtifactName);
  return artifact.bytecode
}

export async function readInterface(deployer: Deployer, contractArtifactName: string): Promise<Interface> {
  let artifact = await loadArtifact(deployer, contractArtifactName);
  return new ethers.utils.Interface(artifact.abi)
}
