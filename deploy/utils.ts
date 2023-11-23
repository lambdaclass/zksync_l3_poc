import { ethers } from "ethers";
import * as hre from "hardhat";
import fs from "fs";
import { checkResultErrors, EventFragment, Fragment, FunctionFragment, Indexed, Interface, JsonFragment, LogDescription, ParamType, Result } from "@ethersproject/abi";
import { Address } from "zksync-web3/build/src/types";
import { Contract } from "zksync-web3";
import { hashBytecode } from "./dev-utils";

export const CREATE2_PREFIX = ethers.utils.solidityKeccak256(["string"], ["zksyncCreate2"]);

export function diamondCut(facetCuts: FacetCut[], initAddress: string, initCalldata: string): DiamondCut {
    return {
      facetCuts,
      initAddress,
      initCalldata,
    };
}

export async function  oldInitialProxyDiamondCut(ownerAddress: Address, adminFacet: Contract, gettersFacet: Contract, mailboxFacet: Contract, executorFacet: Contract, allowList: Contract, diamondInit: Contract) {
    let facetCuts = [
        {
            facet: adminFacet.address,
            selectors: getAllSelectors(adminFacet.interface),
            action: 0,
            isFreezable: false,
        },
        {
            facet: gettersFacet.address,
            selectors: getAllSelectors(gettersFacet.interface),
            action: 0,
            isFreezable: false,
        },
        {
            facet: mailboxFacet.address,
            selectors: getAllSelectors(mailboxFacet.interface),
            action: 0,
            isFreezable: true,
        },
        {
            facet: executorFacet.address,
            selectors: getAllSelectors(executorFacet.interface),
            action: 0,
            isFreezable: true,
        },
    ];
    const diamondInitCalldata = diamondInit.interface.encodeFunctionData("initialize", [
        {
            verifier: "0xD9BeaC58741F9FEE8583A31E4f7BD93BE729eA9A",
            governor: ownerAddress,
            admin: ownerAddress,
            genesisBatchHash: ethers.constants.HashZero,
            genesisIndexRepeatedStorageChanges: ethers.constants.AddressZero,
            genesisBatchCommitment: ethers.constants.HashZero,
            allowList: allowList.address,
            verifierParams: {
                recursionNodeLevelVkHash: "0x1186ec268d49f1905f8d9c1e9d39fc33e98c74f91d91a21b8f7ef78bd09a8db8",
                recursionLeafLevelVkHash: "0x101e08b00193e529145ee09823378ef51a3bc8966504064f1f6ba3f1ba863210",
                recursionCircuitsSetVksHash: "0x142a364ef2073132eaf07aa7f3d8495065be5b92a2dc14fda09b4216affed9c0",
            },
            zkPorterIsAvailable: false,
            l2BootloaderBytecodeHash: ethers.utils.hexlify(hashBytecode(readBlockBootloaderBytecode())),
            l2DefaultAccountBytecodeHash: ethers.utils.hexlify(hashBytecode(readSystemContractsBytecode('DefaultAccount'))),
            priorityTxMaxGasLimit: 80_000_000,
        },
    ]);
    let initialDiamondCut = {
        facetCuts: facetCuts,
        initAddress: diamondInit.address,
        initCalldata: diamondInitCalldata,
    };
    return initialDiamondCut;
}

export async function initialProxyDiamondCut(ownerAddress: Address, adminFacet: Contract, gettersFacet: Contract, mailboxFacet: Contract, executorFacet: Contract, allowList: Contract, diamondInit: Contract) {
    const facetCuts: FacetCut[] = Object.values(await getCurrentFacetCutsForAdd(adminFacet, gettersFacet, mailboxFacet, executorFacet));
    const genesisBatchHash = getHashFromEnv("CONTRACTS_GENESIS_ROOT"); // TODO: confusing name
    const genesisIndexRepeatedStorageChanges = getNumberFromEnv("CONTRACTS_GENESIS_ROLLUP_LEAF_INDEX");
    const genesisBatchCommitment = getHashFromEnv("CONTRACTS_GENESIS_BATCH_COMMITMENT");

    const verifierParams =
      process.env["CONTRACTS_PROVER_AT_GENESIS"] == "fri"
        ? {
            recursionNodeLevelVkHash: getHashFromEnv("CONTRACTS_FRI_RECURSION_NODE_LEVEL_VK_HASH"),
            recursionLeafLevelVkHash: getHashFromEnv("CONTRACTS_FRI_RECURSION_LEAF_LEVEL_VK_HASH"),
            recursionCircuitsSetVksHash: "0x0000000000000000000000000000000000000000000000000000000000000000",
          }
        : {
            recursionNodeLevelVkHash: getHashFromEnv("CONTRACTS_RECURSION_NODE_LEVEL_VK_HASH"),
            recursionLeafLevelVkHash: getHashFromEnv("CONTRACTS_RECURSION_LEAF_LEVEL_VK_HASH"),
            recursionCircuitsSetVksHash: getHashFromEnv("CONTRACTS_RECURSION_CIRCUITS_SET_VKS_HASH"),
          };
    const priorityTxMaxGasLimit = getNumberFromEnv("CONTRACTS_PRIORITY_TX_MAX_GAS_LIMIT");
    const initialProtocolVersion = getNumberFromEnv("CONTRACTS_INITIAL_PROTOCOL_VERSION");
    const DiamondInit = new Interface(hre.artifacts.readArtifactSync("DiamondInit").abi);

    const diamondInitCalldata = DiamondInit.encodeFunctionData("initialize", [
      {
        verifier: "0xD9BeaC58741F9FEE8583A31E4f7BD93BE729eA9A",
        governor: ownerAddress,
        admin: ownerAddress,
        genesisBatchHash,
        genesisIndexRepeatedStorageChanges,
        genesisBatchCommitment,
        allowList: allowList.address,
        verifierParams,
        zkPorterIsAvailable: false,
        l2BootloaderBytecodeHash: ethers.utils.hexlify(hashBytecode(readBlockBootloaderBytecode())),
        l2DefaultAccountBytecodeHash: ethers.utils.hexlify(hashBytecode(readSystemContractsBytecode('DefaultAccount'))),
        priorityTxMaxGasLimit,
        initialProtocolVersion,
      },
    ]);

    // @ts-ignore
    return diamondCut(facetCuts, diamondInit.address, diamondInitCalldata);
}

export enum Action {
    Add = 0,
    Replace = 1,
    Remove = 2,
}

export interface FacetCut {
    facet: string;
    selectors: string[];
    action: Action;
    isFreezable: boolean;
}
  
export interface DiamondCut {
    facetCuts: FacetCut[];
    initAddress: string;
    initCalldata: string;
}

export function getAllSelectors(contractInterface: Interface) {
    return Object.keys(contractInterface.functions)
        .filter((signature) => {
            return signature !== "getName()";
        })
        .map((signature) => contractInterface.getSighash(signature));
}

export function facetCut(address: string, contract: Interface, action: Action, isFreezable: boolean): FacetCut {
    return {
      facet: address,
      selectors: getAllSelectors(contract),
      action,
      isFreezable,
    };
}

export async function getCurrentFacetCutsForAdd(
    adminFacet: Contract,
    gettersFacet: Contract,
    mailboxFacet: Contract,
    executorFacet: Contract
) {
    const adminFacetAddress = adminFacet.address;
    const gettersFacetAddress = gettersFacet.address;
    const mailboxFacetAddress = mailboxFacet.address;
    const executorFacetAddress = executorFacet.address;

    const facetsCuts = {};
    // Some facets should always be available regardless of freezing: upgradability system, getters, etc.
    // And for some facets there are should be possibility to freeze them by the governor if we found a bug inside.
    if (adminFacetAddress) {
      // Should be unfreezable. The function to unfreeze contract is located on the admin facet.
      // That means if the admin facet will be freezable, the proxy can NEVER be unfrozen.
      facetsCuts["AdminFacet"] = facetCut(adminFacetAddress, adminFacet.interface, Action.Add, false);
    }
    if (gettersFacetAddress) {
      // Should be unfreezable. There are getters, that users can expect to be available.
      facetsCuts["GettersFacet"] = facetCut(gettersFacetAddress, gettersFacet.interface, Action.Add, false);
    }
    // These contracts implement the logic without which we can get out of the freeze.
    if (mailboxFacetAddress) {
      facetsCuts["MailboxFacet"] = facetCut(mailboxFacetAddress, mailboxFacet.interface, Action.Add, true);
    }
    if (executorFacetAddress) {
      facetsCuts["ExecutorFacet"] = facetCut(executorFacetAddress, executorFacet.interface, Action.Add, true);
    }
  
    return facetsCuts;
}

export function getHashFromEnv(envName: string): string {
    const hash = process.env[envName]!;
    if (!/^0x[a-fA-F0-9]{64}$/.test(hash)) {
      throw new Error(`Incorrect hash format hash in ${envName} env: ${hash}`);
    }
    return hash;
}

export function getNumberFromEnv(envName: string): string {
    const number = process.env[envName]!;
    if (!/^([1-9]\d*|0)$/.test(number)) {
      throw new Error(`Incorrect number format number in ${envName} env: ${number}`);
    }
    return number;
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
