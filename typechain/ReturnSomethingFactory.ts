/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { ReturnSomething } from "./ReturnSomething";

export class ReturnSomethingFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<ReturnSomething> {
    return super.deploy(overrides || {}) as Promise<ReturnSomething>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ReturnSomething {
    return super.attach(address) as ReturnSomething;
  }
  connect(signer: Signer): ReturnSomethingFactory {
    return super.connect(signer) as ReturnSomethingFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ReturnSomething {
    return new Contract(address, _abi, signerOrProvider) as ReturnSomething;
  }
}

const _abi = [
  {
    stateMutability: "payable",
    type: "fallback",
  },
];

const _bytecode =
  "0x0000000101200190000000040000c13d0000000601000041000000110001042e0000008001000039000000400010043f0000000001000416000000000101004b0000000e0000c13d0000002001000039000001000010044300000120000004430000000501000041000000110001042e000000000100001900000012000104300000001000000432000000110001042e00000012000104300000000000000000000000020000000000000000000000000000004000000100000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a67f315dc4577ec0f1254a215f3dd4671e9e0340a6ea14f1c18c6690820c736d";
