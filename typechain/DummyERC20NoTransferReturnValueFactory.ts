/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { DummyERC20NoTransferReturnValue } from "./DummyERC20NoTransferReturnValue";

export class DummyERC20NoTransferReturnValueFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<DummyERC20NoTransferReturnValue> {
    return super.deploy(
      overrides || {}
    ) as Promise<DummyERC20NoTransferReturnValue>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): DummyERC20NoTransferReturnValue {
    return super.attach(address) as DummyERC20NoTransferReturnValue;
  }
  connect(signer: Signer): DummyERC20NoTransferReturnValueFactory {
    return super.connect(signer) as DummyERC20NoTransferReturnValueFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DummyERC20NoTransferReturnValue {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as DummyERC20NoTransferReturnValue;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x000000000301001900000060033002700000000a033001970000000102200190000000170000c13d000000040230008c000000210000413d000000000201043b0000000c022001970000000d0220009c000000210000c13d0000000002000416000000000202004b000000210000c13d000000040230008a000000400220008c000000210000413d0000000401100370000000000101043b0000000e0110009c000000210000213d0000000001000019000000240001042e0000008001000039000000400010043f0000000001000416000000000101004b000000210000c13d0000002001000039000001000010044300000120000004430000000b01000041000000240001042e000000000100001900000025000104300000002300000432000000240001042e00000025000104300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ffffffff0000000200000000000000000000000000000040000001000000000000000000ffffffff00000000000000000000000000000000000000000000000000000000a9059cbb00000000000000000000000000000000000000000000000000000000000000000000000000000000ffffffffffffffffffffffffffffffffffffffff000000000000000000000000000000000000000000000000000000000000000098848994fc9733cb8c4539ca6612ceda90ff14c6705928b52967c475341a53e4";
