import chalk from 'chalk';
import fs from 'fs';
import * as hre from 'hardhat';
import { Contract, ContractFactory, Provider, Wallet } from 'zksync2-js';
import { ethers } from 'ethers';
import dotenv from 'dotenv';
import { CREATE2_PREFIX, initialProxyDiamondCut, oldInitialProxyDiamondCut } from './utils';
import { DeploymentType } from 'zksync2-js/build/src/types';
// import { create2Address, hashBytecode } from 'zksync2-js/build/src/utils';

dotenv.config();

const entry = chalk.bold.yellow;
const announce = chalk.yellow;
const success = chalk.green;
const timestamp = chalk.grey;

// Pre-requisites:
// - Contracts have been compiled
export default async function () {
    const provider = new Provider("http://127.0.0.1:8011");
    const wallet = new Wallet(process.env.WALLET_PRIVATE_KEY!, provider);

    // const artifact = await hre.artifacts.readArtifact("Verifier");
    // console.log(create2Address(wallet.address, hashBytecode(artifact.bytecode), ethers.keccak256(ethers.toUtf8Bytes("LambdaClass"))));

    await announced('Clean rocksdb', clean('db'));
    await announced('Clean backups', clean('backups'));
    // await announced('Running server genesis setup', server.genesisFromSources());
    await announced('Deploying Base Layer contracts', deployBaseLayerContracts(wallet));
    // await announced('Initializing validator', contract.initializeValidator(governorPrivateKeyArgs));
    // await announced('Initialize L1 allow list', contract.initializeL1AllowList(governorPrivateKeyArgs));
    // await announced(
    //     'Deploying L2 contracts',
    //     contract.deployL2(
    //         deployerL2ContractInput.args,
    //         deployerL2ContractInput.includePaymaster,
    //         deployerL2ContractInput.includeL2WETH
    //     )
    // );

    // if (deployerL2ContractInput.includeL2WETH) {
    //     await announced('Initializing L2 WETH token', contract.initializeWethToken(governorPrivateKeyArgs));
    // }
    // await announced(
    //     'Initializing governance',
    //     contract.initializeGovernance([
    //         ...governorPrivateKeyArgs,
    //         !deployerL2ContractInput.includeL2WETH ? ['--skip-weth-bridge'] : []
    //     ])
    // );
}

// Wrapper that writes an announcement and completion notes for each executed task.
export async function announced(fn: string, promise: Promise<void> | void) {
    const announceLine = `${entry('>')} ${announce(fn)}`;
    const separator = '-'.repeat(fn.length + 2); // 2 is the length of "> ".
    console.log(`\n` + separator); // So it's easier to see each individual step in the console.
    console.log(announceLine);

    const start = new Date().getTime();
    // The actual execution part
    await promise;

    const time = new Date().getTime() - start;
    const successLine = `${success('✔')} ${fn} done`;
    const timestampLine = timestamp(`(${time}ms)`);
    console.log(`${successLine} ${timestampLine}`);
}

export function clean(path: string) {
    if (fs.existsSync(path)) {
        fs.rmSync(path, { recursive: true });
        console.log(`Successfully removed ${path}`);
    }
}

export async function deployBaseLayerContracts(wallet: Wallet): Promise<void> {
    const ownerAddress = wallet.address;

    await deployContract("create", wallet, 'TestnetERC20Token', ['Test Token', 'TST', 18]);

    await deployContract("create", wallet, 'Verifier');

    await deployContract("create", wallet, "Multicall3");
    await deployContract("create", wallet, "DiamondUpgradeInit6");
    await deployContract("create", wallet, "DefaultUpgrade");
    await deployContract("create", wallet, "Governance", [ownerAddress, ethers.ZeroAddress, 0]);
    let allowListContract = await deployContract("create", wallet, "AllowList", [ownerAddress]);
    
    // Deploy ZKSyncContract
    let mailboxFacetContract = await deployContract("create", wallet, "MailboxFacet", []);
    let executorFacetContract = await deployContract("create", wallet, "ExecutorFacet", []);
    let adminFacetContract = await deployContract("create", wallet, "AdminFacet", []);
    let getterFacetContract = await deployContract("create", wallet, "GettersFacet", []);
    let diamondInitContract = await deployContract("create", wallet, "DiamondInit", []);

    // Deploy DiamondProxy
    let diamondProxyConstructorCalldata = await initialProxyDiamondCut(ownerAddress, adminFacetContract, getterFacetContract, mailboxFacetContract, executorFacetContract, allowListContract, diamondInitContract);
    // let diamondProxyConstructorCalldata = await oldInitialProxyDiamondCut(ownerAddress, adminFacetContract, getterFacetContract, mailboxFacetContract, executorFacetContract, allowListContract, diamondInitContract);
    let diamondProxyContract = await deployContract("create", wallet, "DiamondProxy", [260, diamondProxyConstructorCalldata]);
    
    // Deploy Bridges
    let erc20BridgeImplementationContract = await deployContract("create", wallet, "L1ERC20Bridge", [diamondProxyContract.address, allowListContract.address]);
    await deployContract("create", wallet, "TransparentUpgradeableProxy", [erc20BridgeImplementationContract.address, ownerAddress, "0x"]);
    
    // Deploy WETH Bridges
    let l1token = "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6";
    let wethBridgeImplementationContract = await deployContract("create", wallet, "L1WethBridge", [l1token, diamondProxyContract.address, allowListContract.address]);
    let wethBridgeProxyContract = await deployContract("create", wallet, "TransparentUpgradeableProxy", [wethBridgeImplementationContract.address, diamondProxyContract.address, "0x"]);;
    
    // FIXME: 
    // The "2" should be an env variable.
    // Where is the validatorAddress?
    let validatorAddress = ethers.ZeroAddress;
    await deployContract("create", wallet, "ValidatorTimelock", [ownerAddress, diamondProxyContract.address, 2, validatorAddress]);
}

export async function deployContract(deploymentType: DeploymentType, wallet: Wallet, contractName: string, args: any[] = [], overrides: Object = {}): Promise<Contract> {
    const artifact = await hre.artifacts.readArtifact(contractName);
    const factory = new ContractFactory(artifact.abi, artifact.bytecode, wallet, deploymentType);
    // const contract = (await factory.deploy(...args, {
    //     customData: { salt: ethers.keccak256(ethers.toUtf8Bytes("LambdaClass")) },
    // })) as Contract;
    console.log(`${success('✔')} Deployed ${contractName} at address: ${await contract.getAddress()}`);
    return contract;
}
