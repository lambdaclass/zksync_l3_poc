/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { IERC1822Proxiable } from "./IERC1822Proxiable";

export class IERC1822ProxiableFactory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IERC1822Proxiable {
    return new Contract(address, _abi, signerOrProvider) as IERC1822Proxiable;
  }
}

const _abi = [
  {
    inputs: [],
    name: "proxiableUUID",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
