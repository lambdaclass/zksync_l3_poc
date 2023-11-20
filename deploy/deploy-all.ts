import { Contract, ethers } from "ethers";
import { deployContract, getAllSelectors, getWallet, hashL2Bytecode, readBlockBootloaderBytecode, readBytecode, readInterface, readSystemContractsBytecode } from "./utils";
import { Deployer } from "@matterlabs/hardhat-zksync-deploy";
import * as hre from "hardhat";
import { BytesLike, Interface, hexlify } from "ethers/lib/utils";
import { Wallet } from "zksync-web3";
import { ZkSyncArtifact } from "@matterlabs/hardhat-zksync-deploy/src/types";

import { IZkSyncFactory } from "../typechain/IZkSyncFactory";
import { ITransparentUpgradeableProxyFactory } from "../typechain/ITransparentUpgradeableProxyFactory";
import { L1ERC20Bridge } from "../typechain/L1ERC20Bridge";
import { Address } from "zksync-web3/build/src/types";

type L3BaseContracts = {
    multicall3: Contract,
    diamondUpgradeInit6: Contract,
    defaultUpgrade: Contract,
    governance: Contract,
    allowList: Contract,
    mailboxFacet: Contract,
    executorFacet: Contract,
    adminFacet: Contract,
    getterFacet: Contract,
    diamondInit: Contract,
    diamondProxy: Contract,
    erc20BridgeImplementation: Contract,
    erc20BridgeProxy: Contract,
    wethBridgeImplementation: Contract,
    wethBridgeProxy: Contract,
    validatorTimeLock: Contract,
};

async function deployL3BaseContracts(deployer: Deployer, wallet: Wallet, verifierAddress: Address): Promise<L3BaseContracts> {
    let ownerAddress = wallet.address;

    let multicall3Contract = await deployContract(deployer, wallet, "Multicall3");
    let diamondUpgradeInit6Contract = await deployContract(deployer, wallet, "DiamondUpgradeInit6");
    let defaultUpgradeContract = await deployContract(deployer, wallet, "DefaultUpgrade");
    let governanceContract = await deployContract(deployer, wallet, "Governance", [ownerAddress, ethers.constants.AddressZero, 0]);
    let allowListContract = await deployContract(deployer, wallet, "AllowList", [ownerAddress]);
    
    // Deploy ZKSyncContract
    let mailboxFacetContract = await deployContract(deployer, wallet, "MailboxFacet", []);
    let executorFacetContract = await deployContract(deployer, wallet, "ExecutorFacet", []);
    let adminFacetContract = await deployContract(deployer, wallet, "AdminFacet", []);
    let getterFacetContract = await deployContract(deployer, wallet, "GettersFacet", []);
    let diamondInitContract = await deployContract(deployer, wallet, "DiamondInit", []);
    
    // Deploy DiamondProxy
    // NOTE: Check the Action enum on diamondCut.ts file for context on the hardcoded 0.
    let facetCuts = [
        {
            facet: adminFacetContract.address,
            selectors: getAllSelectors(adminFacetContract.interface),
            action: 0,
            isFreezable: false,
        },
        {
            facet: getterFacetContract.address,
            selectors: getAllSelectors(getterFacetContract.interface),
            action: 0,
            isFreezable: false,
        },
        {
            facet: mailboxFacetContract.address,
            selectors: getAllSelectors(mailboxFacetContract.interface),
            action: 0,
            isFreezable: true,
        },
        {
            facet: executorFacetContract.address,
            selectors: getAllSelectors(executorFacetContract.interface),
            action: 0,
            isFreezable: true,
        },
    ];
    const diamondInitCalldata = diamondInitContract.interface.encodeFunctionData("initialize", [
        {
            verifier: verifierAddress,
            governor: ownerAddress,
            admin: ownerAddress,
            genesisBatchHash: ethers.constants.HashZero,
            genesisIndexRepeatedStorageChanges: ethers.constants.AddressZero,
            genesisBatchCommitment: ethers.constants.HashZero,
            allowList: allowListContract.address,
            verifierParams: {
                recursionNodeLevelVkHash: "0x1186ec268d49f1905f8d9c1e9d39fc33e98c74f91d91a21b8f7ef78bd09a8db8",
                recursionLeafLevelVkHash: "0x101e08b00193e529145ee09823378ef51a3bc8966504064f1f6ba3f1ba863210",
                recursionCircuitsSetVksHash: "0x142a364ef2073132eaf07aa7f3d8495065be5b92a2dc14fda09b4216affed9c0",
            },
            zkPorterIsAvailable: false,
            l2BootloaderBytecodeHash: hexlify(hashL2Bytecode(readBlockBootloaderBytecode())),
            l2DefaultAccountBytecodeHash: hexlify(hashL2Bytecode(readSystemContractsBytecode('DefaultAccount'))),
            priorityTxMaxGasLimit: 80_000_000,
        },
    ]);
    let initialDiamondCut = {
        facetCuts: facetCuts,
        initAddress: diamondInitContract.address,
        initCalldata: diamondInitCalldata,
    };
    let diamondProxyContract = await deployContract(deployer, wallet, "DiamondProxy", [260, initialDiamondCut]);
    
    // Deploy Bridges
    let erc20BridgeImplementationContract = await deployContract(deployer, wallet, "L1ERC20Bridge", [diamondProxyContract.address, allowListContract.address]);
    let erc20BridgeProxyContract = await deployContract(deployer, wallet, "TransparentUpgradeableProxy", [erc20BridgeImplementationContract.address, ownerAddress, "0x"]);
    
    // Deploy WETH Bridges
    let l1token = "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6";
    let wethBridgeImplementationContract = await deployContract(deployer, wallet, "L1WethBridge", [l1token, diamondProxyContract.address, allowListContract.address]);
    let wethBridgeProxyContract = await deployContract(deployer, wallet, "TransparentUpgradeableProxy", [wethBridgeImplementationContract.address, diamondProxyContract.address, "0x"]);;
    
    // FIXME: 
    // The "2" should be an env variable.
    // Where is the validatorAddress?
    let validatorAddress = ethers.constants.AddressZero;
    let validatorTimeLockContract = await deployContract(deployer, wallet, "ValidatorTimelock", [ownerAddress, diamondProxyContract.address, 2, validatorAddress]);

    return {
        multicall3: multicall3Contract,
        diamondUpgradeInit6: diamondUpgradeInit6Contract,
        defaultUpgrade: defaultUpgradeContract,
        governance: governanceContract,
        allowList: allowListContract,
        mailboxFacet: mailboxFacetContract,
        executorFacet: executorFacetContract,
        adminFacet: adminFacetContract,
        getterFacet: getterFacetContract,
        diamondInit: diamondInitContract,
        diamondProxy: diamondProxyContract,
        erc20BridgeImplementation: erc20BridgeImplementationContract,
        erc20BridgeProxy: erc20BridgeProxyContract,
        wethBridgeImplementation: wethBridgeImplementationContract,
        wethBridgeProxy: wethBridgeProxyContract,
        validatorTimeLock: validatorTimeLockContract,
    };
}

async function initializeL3BaseContracts(l3BaseContracts: L3BaseContracts, wallet: Wallet) {
    const zkSync = IZkSyncFactory.connect(l3BaseContracts.diamondProxy.address, wallet);

    // Initialize validator
    const validatorInitTx = await zkSync.setValidator(l3BaseContracts.validatorTimeLock.address, true);
    console.log(`Transaction sent with hash ${validatorInitTx.hash} and nonce ${validatorInitTx.nonce}`);
    const validatorInitReceipt = await validatorInitTx.wait();

    console.log(`Validator is set, gasUsed: ${validatorInitReceipt.gasUsed.toString()}`);

    // Initialize allow list
    // NOTE: Check the Action enum on diamondCut.ts file for context on the hardcoded 0.
    const allowListInitTx = await l3BaseContracts.allowList.setBatchAccessMode(
        [
            l3BaseContracts.diamondProxy.address,
            l3BaseContracts.erc20BridgeProxy.address,
            l3BaseContracts.wethBridgeProxy.address,
        ],
        [2, 2, 2],
    );
    console.log(`Transaction sent with hash ${allowListInitTx.hash} and nonce ${allowListInitTx.nonce}`);
    const allowListInitReceipt = await allowListInitTx.wait();
    console.log(`Allow List is set, gasUsed: ${allowListInitReceipt.gasUsed.toString()}`);

    // Initialize Governance
    const erc20Bridge = ITransparentUpgradeableProxyFactory.connect(l3BaseContracts.erc20BridgeProxy.address, wallet);
    const wethBridge = ITransparentUpgradeableProxyFactory.connect(l3BaseContracts.wethBridgeProxy.address, wallet);

    let erc20BridgeChangeAdminTx = await erc20Bridge.changeAdmin(l3BaseContracts.governance.address);
    console.log(`Transaction sent with hash ${erc20BridgeChangeAdminTx.hash} and nonce ${erc20BridgeChangeAdminTx.nonce}`);
    let erc20BridgeChangeAdminReceipt = await erc20BridgeChangeAdminTx.wait();
    console.log(`ERC20 Bridge admin is set, gasUsed: ${erc20BridgeChangeAdminReceipt.gasUsed.toString()}`);

    // let wethBridgeChangeAdminTx = await wethBridge.changeAdmin(l3BaseContracts.governance.address);
    // console.log(`Transaction sent with hash ${wethBridgeChangeAdminTx.hash} and nonce ${wethBridgeChangeAdminTx.nonce}`);
    // let wethBridgeChangeAdminReceipt = await wethBridgeChangeAdminTx.wait();
    // console.log(`WETH Bridge admin is set, gasUsed: ${wethBridgeChangeAdminReceipt.gasUsed.toString()}`);

    let zkSyncSetPendingGovernorTx = await zkSync.setPendingGovernor(l3BaseContracts.governance.address);
    console.log(`Transaction sent with hash ${zkSyncSetPendingGovernorTx.hash} and nonce ${zkSyncSetPendingGovernorTx.nonce}`);
    let zkSyncSetPendingGovernorReceipt = await zkSyncSetPendingGovernorTx.wait();
    console.log(`zkSync pending governor is set, gasUsed: ${zkSyncSetPendingGovernorReceipt.gasUsed.toString()}`);

    const call = {
        target: zkSync.address,
        value: 0,
        data: zkSync.interface.encodeFunctionData("acceptGovernor"),
    };

    const operation = {
        calls: [call],
        predecessor: ethers.constants.HashZero,
        salt: ethers.constants.HashZero,
    };

    let governanceScheduleTransparentTx = await l3BaseContracts.governance.scheduleTransparent(operation, 0);
    console.log(`Transaction sent with hash ${governanceScheduleTransparentTx.hash} and nonce ${governanceScheduleTransparentTx.nonce}`);
    let governanceScheduleTransparentReceipt = await governanceScheduleTransparentTx.wait();
    console.log(`Governance is scheduled, gasUsed: ${governanceScheduleTransparentReceipt.gasUsed.toString()}`);

    let governanceExecuteTx = await l3BaseContracts.governance.execute(operation);
    console.log(`Transaction sent with hash ${governanceExecuteTx.hash} and nonce ${governanceExecuteTx.nonce}`);
    let governanceExecuteReceipt = await governanceExecuteTx.wait();
    console.log(`Governance is executed, gasUsed: ${governanceExecuteReceipt.gasUsed.toString()}`);

    console.log("Governance is set");
    // Initialize L2 Weth token

    // Initialize bridges
    // const L2_ERC20_BRIDGE_PROXY_BYTECODE = await readBytecode(deployer, "TransparentUpgradeableProxy");
    // const L2_ERC20_BRIDGE_IMPLEMENTATION_BYTECODE = await readBytecode(deployer, "L2ERC20Bridge");
    // const L2_STANDARD_ERC20_IMPLEMENTATION_BYTECODE = await readBytecode(deployer, "L2StandardERC20");
    // const L2_STANDARD_ERC20_PROXY_BYTECODE = await readBytecode(deployer, "BeaconProxy");
    // const L2_STANDARD_ERC20_PROXY_FACTORY_BYTECODE = await readBytecode(deployer, "UpgradeableBeacon");
    // const L2_ERC20_BRIDGE_INTERFACE = await readInterface(deployer, "L2ERC20Bridge");
    // const DEPLOY_L2_BRIDGE_COUNTERPART_GAS_LIMIT = 80_000_000;

    // const zkSync = baseContracts.diamondProxy;
    // const erc20Bridge = baseContracts.erc20BridgeProxy;
    // // TODO: Double check this is right.
    // const l2GovernorAddress = baseContracts.governance.address;

    // const proxyInitializationParams = L2_ERC20_BRIDGE_INTERFACE.encodeFunctionData("initialize", [
    //     erc20Bridge.address,
    //     hashL2Bytecode(L2_STANDARD_ERC20_PROXY_BYTECODE),
    //     l2GovernorAddress,
    // ]);

    // Initialize Weth bridges
}

export default async function () {
    const wallet = getWallet();
    const deployer = new Deployer(hre, wallet);
    const verifierAddress = "0xa264Dd5AFe03dC84521F2b6e30e9E289bAc6aCd9";
    const l3BaseContracts = await deployL3BaseContracts(deployer, wallet, verifierAddress);
    await initializeL3BaseContracts(l3BaseContracts, wallet);
}
