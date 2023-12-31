/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { IVerifier } from "./IVerifier";

export class IVerifierFactory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IVerifier {
    return new Contract(address, _abi, signerOrProvider) as IVerifier;
  }
}

const _abi = [
  {
    inputs: [],
    name: "verificationKeyHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "_publicInputs",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "_proof",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "_recursiveAggregationInput",
        type: "uint256[]",
      },
    ],
    name: "verify",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
