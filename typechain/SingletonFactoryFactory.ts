/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { SingletonFactory } from "./SingletonFactory";

export class SingletonFactoryFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<SingletonFactory> {
    return super.deploy(overrides || {}) as Promise<SingletonFactory>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): SingletonFactory {
    return super.attach(address) as SingletonFactory;
  }
  connect(signer: Signer): SingletonFactoryFactory {
    return super.connect(signer) as SingletonFactoryFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SingletonFactory {
    return new Contract(address, _abi, signerOrProvider) as SingletonFactory;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_initCode",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "_salt",
        type: "bytes32",
      },
    ],
    name: "deploy",
    outputs: [
      {
        internalType: "address payable",
        name: "createdContract",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x0000008003000039000000400030043f0000000003010019000000600330027000000025033001970000000102200190000000360000c13d000000040230008c000000440000413d000000000201043b0000002702200197000000280220009c000000440000c13d0000000002000416000000000202004b000000440000c13d000000040230008a000000400220008c000000440000413d0000000402100370000000000402043b000000290240009c000000440000213d00000023024000390000002a05000041000000000632004b000000000600001900000000060580190000002a02200197000000000702004b00000000050080190000002a0220009c00000000020600190000000002056019000000000202004b000000440000c13d0000000405400039000000000251034f000000000202043b0000002b0620009c000000300000813d0000001f06200039000000200700008a000000000676016f000000bf06600039000000000676016f000000290760009c0000003e0000a13d000000300100004100000000001004350000004101000039000000040010043f00000031010000410000008f000104300000000001000416000000000101004b000000440000c13d00000020010000390000010000100443000001200000044300000026010000410000008e0001042e000000400060043f000000800020043f00000000042400190000002404400039000000000334004b000000460000a13d00000000010000190000008f000104300000002003500039000000000331034f0000001f0420018f0000000505200272000000540000613d00000000060000190000000507600210000000000873034f000000000808043b000000a00770003900000000008704350000000106600039000000000756004b0000004c0000413d000000000604004b000000630000613d0000000505500210000000000353034f0000000304400210000000a005500039000000000605043300000000064601cf000000000646022f000000000303043b0000010004400089000000000343022f00000000034301cf000000000363019f0000000000350435000000a00220003900000000000204350000002401100370000000000101043b000000800200043d00000000030004140000002c04000041000000a00040043f000000a40010043f0000006001000039000000e40010043f000000840120008a000001040010043f0000002504000041000000250130009c00000000010400190000000001034019000000250320009c00000000020480190000006002200210000000c001100210000000000112019f0000002d011001c70000800602000039008d00880000040f00000001022001900000000002000019000000810000613d000000000101043b0000002e02100197000000400100043d0000000000210435000000250210009c000000250100804100000040011002100000002f011001c70000008e0001042e0000008b002104210000000102000039000000000001042d0000000002000019000000000001042d0000008d000004320000008e0001042e0000008f00010430000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ffffffff0000000200000000000000000000000000000040000001000000000000000000ffffffff000000000000000000000000000000000000000000000000000000004af63f0200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ffffffffffffffff800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000003cda33511d41a8a5431b1770c5bc0ddd62e1cd30555d16659b89c0d60f4f9f570200000000000000000000000000000000000000000000a00000000000000000000000000000000000000000ffffffffffffffffffffffffffffffffffffffff00000000000000000000000000000000000000200000000000000000000000004e487b710000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000240000000000000000000000006e05658f5eb4279a3421d5a118933acaf79cf4d10841bb29a2094dc6ef83fa04";
