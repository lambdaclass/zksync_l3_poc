import { Contract, ethers } from "ethers";
import { deployContract, getAllSelectors, getWallet, hashL2Bytecode, readBlockBootloaderBytecode, readBytecode, readInterface, readSystemContractsBytecode } from "./utils";
import { Deployer } from "@matterlabs/hardhat-zksync-deploy";
import * as hre from "hardhat";

export default async function () {
    const wallet = getWallet();
    const deployer = new Deployer(hre, wallet);
    await deployContract(deployer, wallet, "Verifier");
}
