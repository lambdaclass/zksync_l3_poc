/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { PriorityQueueTest } from "./PriorityQueueTest";

export class PriorityQueueTestFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<PriorityQueueTest> {
    return super.deploy(overrides || {}) as Promise<PriorityQueueTest>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): PriorityQueueTest {
    return super.attach(address) as PriorityQueueTest;
  }
  connect(signer: Signer): PriorityQueueTestFactory {
    return super.connect(signer) as PriorityQueueTestFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PriorityQueueTest {
    return new Contract(address, _abi, signerOrProvider) as PriorityQueueTest;
  }
}

const _abi = [
  {
    inputs: [],
    name: "front",
    outputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "canonicalTxHash",
            type: "bytes32",
          },
          {
            internalType: "uint64",
            name: "expirationTimestamp",
            type: "uint64",
          },
          {
            internalType: "uint192",
            name: "layer2Tip",
            type: "uint192",
          },
        ],
        internalType: "struct PriorityOperation",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getFirstUnprocessedPriorityTx",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getSize",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTotalPriorityTxs",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "isEmpty",
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
  {
    inputs: [],
    name: "popFront",
    outputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "canonicalTxHash",
            type: "bytes32",
          },
          {
            internalType: "uint64",
            name: "expirationTimestamp",
            type: "uint64",
          },
          {
            internalType: "uint192",
            name: "layer2Tip",
            type: "uint192",
          },
        ],
        internalType: "struct PriorityOperation",
        name: "operation",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "canonicalTxHash",
            type: "bytes32",
          },
          {
            internalType: "uint64",
            name: "expirationTimestamp",
            type: "uint64",
          },
          {
            internalType: "uint192",
            name: "layer2Tip",
            type: "uint192",
          },
        ],
        internalType: "struct PriorityOperation",
        name: "_operation",
        type: "tuple",
      },
    ],
    name: "pushBack",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x00030000000000020000008003000039000000400030043f0000000003010019000000600330027000000053033001970000000102200190000000190000c13d000000040230008c000001160000413d000000000201043b000000e002200270000000550420009c000000210000a13d000000560120009c0000002d0000213d000000590120009c0000004b0000613d0000005a0120009c000001160000c13d0000000001000416000000000101004b000001160000c13d00000001010000390000002b0000013d0000000001000416000000000101004b000001160000c13d0000002001000039000001000010044300000120000004430000005401000041000001480001042e0000005b0420009c000000400000613d0000005c0420009c000000630000613d0000005d0120009c000001160000c13d0000000001000416000000000101004b000001160000c13d0000000201000039000000000101041a000000b60000013d000000570120009c0000009b0000613d000000580120009c000001160000c13d0000000001000416000000000101004b000001160000c13d0000000201000039000000000101041a0000000102000039000000000202041a000000000312004b000000b50000813d000000650100004100000000001004350000001101000039000000040010043f000000660100004100000149000104300000000001000416000000000101004b000001160000c13d0000000201000039000000000101041a0000000102000039000000000202041a000000000112004b00000000010000190000000101006039000000b60000013d0000000001000416000000000101004b000001160000c13d000000800000043f000000a00000043f000000c00000043f0000014001000039000000400010043f000000e00000043f000001000000043f000001200000043f0000000203000039000000000403041a0000000101000039000000000201041a000000000242004b000000b90000c13d0000006002000041000001400020043f0000002002000039000001440020043f000001640010043f0000006701000041000000b20000013d0000000002000416000000000202004b000001160000c13d000000040230008a000000600220008c000001160000413d000000e002000039000000400020043f0000000402100370000000000202043b000000800020043f0000002402100370000000000202043b0000005f0320009c000001160000213d000000a00020043f0000004401100370000000000101043b000000680210009c000001160000213d000000c00010043f0000000101000039000200000001001d000000000101041a000300000001001d0000000000100435000000200000043f00000053010000410000000002000414000000530320009c0000000001024019000000c00110021000000063011001c70000801002000039014701420000040f0000000102200190000001160000613d000000000101043b000000800200043d000000000021041b000000a00200043d0000005f02200197000000c00300043d0000004003300210000000000223019f0000000101100039000000000021041b000000010100008a0000000302000029000000000112004b0000003a0000613d00000001012000390000000202000029000000000012041b0000000001000019000001480001042e0000000001000416000000000101004b000001160000c13d000000800000043f000000a00000043f000000c00000043f0000014001000039000000400010043f000000e00000043f000001000000043f000001200000043f0000000201000039000000000201041a0000000101000039000000000301041a000000000323004b000000cf0000c13d0000006002000041000001400020043f0000002002000039000001440020043f000001640010043f0000006101000041000001840010043f000000620100004100000149000104300000000001120049000000800010043f0000005e01000041000001480001042e000200000003001d0000000000400435000000200000043f00000053010000410000000002000414000000530320009c0000000001024019000000c00110021000000063011001c70000801002000039000300000004001d014701420000040f0000000102200190000001160000613d0000000305000029000000400300043d000000640230009c000000ee0000413d0000006501000041000000000010043500000041010000390000003d0000013d0000000000200435000000200000043f0000000001000019014701300000040f000300000001001d014701180000040f00000000020100190000000303000029000000000103041a00000000011204360000000103300039000000000303041a0000005f043001970000000000410435000000400130027000000040032000390000000000130435000000400100043d000300000001001d014701240000040f000000030400002900000000014100490000005302000041000000530310009c0000000001028019000000530340009c000000000204401900000040022002100000006001100210000000000121019f000001480001042e000000000101043b0000006002300039000000400020043f000000000201041a00000000022304360000000101100039000000000101041a000100000003001d0000004003300039000000400410027000000000004304350000005f0110019700000000001204350000000000500435000000200000043f00000053010000410000000002000414000000530320009c0000000001024019000000c00110021000000063011001c70000801002000039014701420000040f0000000102200190000001160000613d000000000101043b000000000001041b0000000101100039000000000001041b000000010100008a000000030110006b00000003010000290000003a0000613d00000001011000390000000202000029000000000012041b000000400100043d000300000001001d0000000102000029000000e20000013d00000000010000190000014900010430000000400100043d000000640210009c0000011e0000813d0000006002100039000000400020043f000000000001042d000000650100004100000000001004350000004101000039000000040010043f000000660100004100000149000104300000000043020434000000000331043600000000040404330000005f044001970000000000430435000000400220003900000000020204330000006802200197000000400310003900000000002304350000006001100039000000000001042d0000005302000041000000530310009c00000000010280190000000003000414000000530430009c0000000002034019000000c0022002100000004001100210000000000121019f00000063011001c70000801002000039014701420000040f0000000102200190000001400000613d000000000101043b000000000001042d0000000001000019000001490001043000000145002104230000000102000039000000000001042d0000000002000019000000000001042d0000014700000432000001480001042e00000149000104300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ffffffff00000002000000000000000000000000000000400000010000000000000000000000000000000000000000000000000000000000000000000000000084d9fedc00000000000000000000000000000000000000000000000000000000ba75bbd700000000000000000000000000000000000000000000000000000000ba75bbd800000000000000000000000000000000000000000000000000000000de8fa4310000000000000000000000000000000000000000000000000000000084d9fedd00000000000000000000000000000000000000000000000000000000a1954fc500000000000000000000000000000000000000000000000000000000681fe70c0000000000000000000000000000000000000000000000000000000075fe6a990000000000000000000000000000000000000000000000000000000079823c9a0000000000000000000000000000000000000020000000800000000000000000000000000000000000000000000000000000000000000000ffffffffffffffff08c379a000000000000000000000000000000000000000000000000000000000440000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000640000014000000000000000000200000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000000000000000ffffffffffffffa04e487b7100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002400000000000000000000000073000000000000000000000000000000000000000000000000000000000000000000000000000000ffffffffffffffffffffffffffffffffffffffffffffffff00000000000000000000000000000000000000000000000000000000000000001d2232ab8937b3837d16f735fa03e0de53d8e7aad8d3fa2813b30cd595c2815c";
