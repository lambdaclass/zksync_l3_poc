/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { TransactionValidatorTest } from "./TransactionValidatorTest";

export class TransactionValidatorTestFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<TransactionValidatorTest> {
    return super.deploy(overrides || {}) as Promise<TransactionValidatorTest>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TransactionValidatorTest {
    return super.attach(address) as TransactionValidatorTest;
  }
  connect(signer: Signer): TransactionValidatorTestFactory {
    return super.connect(signer) as TransactionValidatorTestFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TransactionValidatorTest {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as TransactionValidatorTest;
  }
}

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "txType",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "from",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "to",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "gasLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "gasPerPubdataByteLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxFeePerGas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxPriorityFeePerGas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "paymaster",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
          {
            internalType: "uint256[4]",
            name: "reserved",
            type: "uint256[4]",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "signature",
            type: "bytes",
          },
          {
            internalType: "uint256[]",
            name: "factoryDeps",
            type: "uint256[]",
          },
          {
            internalType: "bytes",
            name: "paymasterInput",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "reservedDynamic",
            type: "bytes",
          },
        ],
        internalType: "struct IMailbox.L2CanonicalTransaction",
        name: "_transaction",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "_priorityTxMaxGasLimit",
        type: "uint256",
      },
    ],
    name: "validateL1ToL2Transaction",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "txType",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "from",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "to",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "gasLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "gasPerPubdataByteLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxFeePerGas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxPriorityFeePerGas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "paymaster",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
          {
            internalType: "uint256[4]",
            name: "reserved",
            type: "uint256[4]",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "signature",
            type: "bytes",
          },
          {
            internalType: "uint256[]",
            name: "factoryDeps",
            type: "uint256[]",
          },
          {
            internalType: "bytes",
            name: "paymasterInput",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "reservedDynamic",
            type: "bytes",
          },
        ],
        internalType: "struct IMailbox.L2CanonicalTransaction",
        name: "_transaction",
        type: "tuple",
      },
    ],
    name: "validateUpgradeTransaction",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x0000008003000039000000400030043f000000000301001900000060033002700000013e033001970000000102200190000001b90000c13d000000040230008c0000034b0000413d000000000201043b000000e002200270000001400420009c000001c10000613d000001410220009c0000034b0000c13d0000000002000416000000000202004b0000034b0000c13d000000040230008a000000200220008c0000034b0000413d0000000402100370000000000402043b000001420240009c0000034b0000213d000000040240003900000000052300490000014306000041000002600750008c000000000700001900000000070640190000014305500197000000000805004b000000000600a019000001430550009c00000000050700190000000005066019000000000505004b0000034b0000c13d0000028005000039000000400050043f000000000621034f000000000606043b000000800060043f0000002006200039000000000661034f000000000606043b000000a00060043f0000004006200039000000000661034f000000000606043b000000c00060043f0000006006200039000000000661034f000000000606043b000000e00060043f0000008006200039000000000661034f000000000606043b000001000060043f000000a006200039000000000661034f000000000606043b000001200060043f000000c006200039000000000661034f000000000606043b000001400060043f000000e006200039000000000661034f000000000606043b000001600060043f0000010006200039000000000661034f000000000606043b000001800060043f0000012006200039000000000761034f000000000707043b000001a00070043f0000016307400039000000000737004b0000034b0000813d0000030007000039000000400070043f000001c407400039000000000837004b0000034b0000213d0000014404400039000000000841034f000000000808043b00000000058504360000002004400039000000000874004b000000590000413d0000028004000039000001c00040043f000000a005600039000000000451034f000000000404043b000001420640009c0000034b0000213d00000000092400190000001f049000390000014306000041000000000734004b000000000700001900000000070680190000014304400197000000000804004b0000000006008019000001430440009c00000000040700190000000004066019000000000404004b0000034b0000c13d000000000491034f000000000604043b000001420460009c0000022a0000213d0000003f07600039000000200400008a000000000847016f000000400700043d0000000008870019000000000a78004b000000000a000019000000010a004039000001420b80009c0000022a0000213d000000010aa001900000022a0000c13d000000400080043f00000000086704360000002009900039000000000a960019000000000a3a004b0000034b0000213d000000000a91034f0000001f0960018f000000050b600272000000970000613d000000000c000019000000050dc00210000000000ed80019000000000dda034f000000000d0d043b0000000000de0435000000010cc00039000000000dbc004b0000008f0000413d000000000c09004b000000a60000613d000000050bb00210000000000aba034f000000000bb800190000000309900210000000000c0b0433000000000c9c01cf000000000c9c022f000000000a0a043b0000010009900089000000000a9a022f00000000099a01cf0000000009c9019f00000000009b043500000000066800190000000000060435000001e00070043f0000002005500039000000000651034f000000000606043b000001420760009c0000034b0000213d00000000092600190000001f069000390000014307000041000000000836004b000000000800001900000000080780190000014306600197000000000a06004b0000000007008019000001430660009c00000000060800190000000006076019000000000606004b0000034b0000c13d000000000691034f000000000606043b000001420760009c0000022a0000213d0000003f07600039000000000847016f000000400700043d0000000008870019000000000a78004b000000000a000019000000010a004039000001420b80009c0000022a0000213d000000010aa001900000022a0000c13d000000400080043f00000000086704360000002009900039000000000a960019000000000a3a004b0000034b0000213d000000000a91034f0000001f0960018f000000050b600272000000de0000613d000000000c000019000000050dc00210000000000ed80019000000000dda034f000000000d0d043b0000000000de0435000000010cc00039000000000dbc004b000000d60000413d000000000c09004b000000ed0000613d000000050bb00210000000000aba034f000000000bb800190000000309900210000000000c0b0433000000000c9c01cf000000000c9c022f000000000a0a043b0000010009900089000000000a9a022f00000000099a01cf0000000009c9019f00000000009b043500000000066800190000000000060435000002000070043f0000002005500039000000000651034f000000000606043b000001420760009c0000034b0000213d00000000072600190000001f067000390000014308000041000000000936004b000000000900001900000000090880190000014306600197000000000a06004b0000000008008019000001430660009c00000000060900190000000006086019000000000606004b0000034b0000c13d000000000671034f000000000806043b000001420680009c0000022a0000213d00000005098002100000003f06900039000000000a46016f000000400600043d000000000aa60019000000000b6a004b000000000b000019000000010b004039000001420ca0009c0000022a0000213d000000010bb001900000022a0000c13d0000004000a0043f000000000086043500000020077000390000000008790019000000000938004b0000034b0000213d000000000987004b000001230000813d0000000009060019000000000a71034f000000000a0a043b00000020099000390000000000a904350000002007700039000000000a87004b0000011c0000413d000002200060043f0000002005500039000000000651034f000000000606043b000001420760009c0000034b0000213d00000000092600190000001f069000390000014307000041000000000836004b000000000800001900000000080780190000014306600197000000000a06004b0000000007008019000001430660009c00000000060800190000000006076019000000000606004b0000034b0000c13d000000000691034f000000000606043b000001420760009c0000022a0000213d0000003f07600039000000000847016f000000400700043d0000000008870019000000000a78004b000000000a000019000000010a004039000001420b80009c0000022a0000213d000000010aa001900000022a0000c13d000000400080043f00000000086704360000002009900039000000000a960019000000000a3a004b0000034b0000213d000000000a91034f0000001f0960018f000000050b600272000001590000613d000000000c000019000000050dc00210000000000ed80019000000000dda034f000000000d0d043b0000000000de0435000000010cc00039000000000dbc004b000001510000413d000000000c09004b000001680000613d000000050bb00210000000000aba034f000000000bb800190000000309900210000000000c0b0433000000000c9c01cf000000000c9c022f000000000a0a043b0000010009900089000000000a9a022f00000000099a01cf0000000009c9019f00000000009b043500000000066800190000000000060435000002400070043f0000002005500039000000000551034f000000000505043b000001420650009c0000034b0000213d00000000062500190000001f026000390000014305000041000000000732004b000000000700001900000000070580190000014302200197000000000802004b0000000005008019000001430220009c00000000020700190000000002056019000000000202004b0000034b0000c13d000000000261034f000000000502043b000001420250009c0000022a0000213d0000003f02500039000000000442016f000000400200043d0000000004420019000000000724004b00000000070000190000000107004039000001420840009c0000022a0000213d00000001077001900000022a0000c13d000000400040043f000000000452043600000020066000390000000007650019000000000337004b0000034b0000213d000000000361034f0000001f0150018f0000000506500272000001a00000613d000000000700001900000005087002100000000009840019000000000883034f000000000808043b00000000008904350000000107700039000000000867004b000001980000413d000000000701004b000001af0000613d0000000506600210000000000363034f00000000066400190000000301100210000000000706043300000000071701cf000000000717022f000000000303043b0000010001100089000000000313022f00000000011301cf000000000171019f000000000016043500000000015400190000000000010435000002600020043f000000a00100043d000001580110009c0000043b0000413d000000400100043d000000440210003900000164030000410000049d0000013d0000000001000416000000000101004b0000034b0000c13d0000002001000039000001000010044300000120000004430000013f01000041000004f20001042e0000000002000416000000000202004b0000034b0000c13d000000040230008a000000400220008c0000034b0000413d0000000402100370000000000202043b000001420420009c0000034b0000213d000000040420003900000000054300490000014306000041000002600750008c000000000700001900000000070640190000014305500197000000000805004b000000000600a019000001430550009c00000000050700190000000005066019000000000505004b0000034b0000c13d0000028005000039000000400050043f000000000641034f000000000606043b000000800060043f0000002006400039000000000661034f000000000606043b000000a00060043f0000004006400039000000000661034f000000000606043b000000c00060043f0000006006400039000000000661034f000000000606043b000000e00060043f0000008006400039000000000661034f000000000606043b000001000060043f000000a006400039000000000661034f000000000606043b000001200060043f000000c006400039000000000661034f000000000606043b000001400060043f000000e006400039000000000661034f000000000606043b000001600060043f0000010006400039000000000661034f000000000606043b000001800060043f0000012006400039000000000761034f000000000707043b000001a00070043f0000016307200039000000000737004b0000034b0000813d0000030007000039000000400070043f000001c407200039000000000837004b0000034b0000213d0000014402200039000000000821034f000000000808043b00000000058504360000002002200039000000000872004b0000020b0000413d0000028002000039000001c00020043f000000a005600039000000000251034f000000000202043b000001420620009c0000034b0000213d00000000094200190000001f029000390000014306000041000000000732004b000000000700001900000000070680190000014302200197000000000802004b0000000006008019000001430220009c00000000020700190000000002066019000000000202004b0000034b0000c13d000000000291034f000000000602043b000001420260009c000002300000a13d000001540100004100000000001004350000004101000039000000040010043f0000015501000041000004f3000104300000003f07600039000000200200008a000000000827016f000000400700043d0000000008870019000000000a78004b000000000a000019000000010a004039000001420b80009c0000022a0000213d000000010aa001900000022a0000c13d000000400080043f00000000086704360000002009900039000000000a960019000000000a3a004b0000034b0000213d000000000a91034f0000001f0960018f000000050b6002720000024f0000613d000000000c000019000000050dc00210000000000ed80019000000000dda034f000000000d0d043b0000000000de0435000000010cc00039000000000dbc004b000002470000413d000000000c09004b0000025e0000613d000000050bb00210000000000aba034f000000000bb800190000000309900210000000000c0b0433000000000c9c01cf000000000c9c022f000000000a0a043b0000010009900089000000000a9a022f00000000099a01cf0000000009c9019f00000000009b043500000000066800190000000000060435000001e00070043f0000002005500039000000000651034f000000000606043b000001420760009c0000034b0000213d00000000094600190000001f069000390000014307000041000000000836004b000000000800001900000000080780190000014306600197000000000a06004b0000000007008019000001430660009c00000000060800190000000006076019000000000606004b0000034b0000c13d000000000691034f000000000606043b000001420760009c0000022a0000213d0000003f07600039000000000827016f000000400700043d0000000008870019000000000a78004b000000000a000019000000010a004039000001420b80009c0000022a0000213d000000010aa001900000022a0000c13d000000400080043f00000000086704360000002009900039000000000a960019000000000a3a004b0000034b0000213d000000000a91034f0000001f0960018f000000050b600272000002960000613d000000000c000019000000050dc00210000000000ed80019000000000dda034f000000000d0d043b0000000000de0435000000010cc00039000000000dbc004b0000028e0000413d000000000c09004b000002a50000613d000000050bb00210000000000aba034f000000000bb800190000000309900210000000000c0b0433000000000c9c01cf000000000c9c022f000000000a0a043b0000010009900089000000000a9a022f00000000099a01cf0000000009c9019f00000000009b043500000000066800190000000000060435000002000070043f0000002005500039000000000651034f000000000606043b000001420760009c0000034b0000213d00000000074600190000001f067000390000014308000041000000000936004b000000000900001900000000090880190000014306600197000000000a06004b0000000008008019000001430660009c00000000060900190000000006086019000000000606004b0000034b0000c13d000000000671034f000000000806043b000001420680009c0000022a0000213d00000005098002100000003f06900039000000000a26016f000000400600043d000000000aa60019000000000b6a004b000000000b000019000000010b004039000001420ca0009c0000022a0000213d000000010bb001900000022a0000c13d0000004000a0043f000000000086043500000020077000390000000008790019000000000938004b0000034b0000213d000000000987004b000002db0000813d0000000009060019000000000a71034f000000000a0a043b00000020099000390000000000a904350000002007700039000000000a87004b000002d40000413d000002200060043f0000002005500039000000000651034f000000000606043b000001420760009c0000034b0000213d00000000094600190000001f069000390000014307000041000000000836004b000000000800001900000000080780190000014306600197000000000a06004b0000000007008019000001430660009c00000000060800190000000006076019000000000606004b0000034b0000c13d000000000691034f000000000606043b000001420760009c0000022a0000213d0000003f07600039000000000827016f000000400700043d0000000008870019000000000a78004b000000000a000019000000010a004039000001420b80009c0000022a0000213d000000010aa001900000022a0000c13d000000400080043f00000000086704360000002009900039000000000a960019000000000a3a004b0000034b0000213d000000000a91034f0000001f0960018f000000050b600272000003110000613d000000000c000019000000050dc00210000000000ed80019000000000dda034f000000000d0d043b0000000000de0435000000010cc00039000000000dbc004b000003090000413d000000000c09004b000003200000613d000000050bb00210000000000aba034f000000000bb800190000000309900210000000000c0b0433000000000c9c01cf000000000c9c022f000000000a0a043b0000010009900089000000000a9a022f00000000099a01cf0000000009c9019f00000000009b043500000000066800190000000000060435000002400070043f0000002005500039000000000551034f000000000505043b000001420650009c0000034b0000213d00000000074500190000001f047000390000014305000041000000000634004b000000000600001900000000060580190000014304400197000000000804004b0000000005008019000001430440009c00000000040600190000000004056019000000000404004b0000034b0000c13d000000000471034f000000000404043b000001420540009c0000022a0000213d0000003f05400039000000000625016f000000400500043d0000000006650019000000000856004b00000000080000190000000108004039000001420960009c0000022a0000213d00000001088001900000022a0000c13d000000400060043f000000000645043600000020077000390000000008740019000000000338004b0000034d0000a13d0000000001000019000004f300010430000000000771034f0000001f0340018f00000005084002720000035a0000613d0000000009000019000000050a900210000000000ba60019000000000aa7034f000000000a0a043b0000000000ab04350000000109900039000000000a89004b000003520000413d000000000903004b000003690000613d0000000508800210000000000787034f00000000088600190000000303300210000000000908043300000000093901cf000000000939022f000000000707043b0000010003300089000000000737022f00000000033701cf000000000393019f000000000038043500000000034600190000000000030435000002600050043f000000400400043d0000002005400039000000200300003900000000003504350000004005400039000000800600043d00000000006504350000006005400039000000a00600043d00000000006504350000008005400039000000c00600043d0000000000650435000000a005400039000000e00600043d0000000000650435000000c005400039000001000600043d0000000000650435000000e005400039000001200600043d00000000006504350000010005400039000001400600043d00000000006504350000012005400039000001600600043d00000000006504350000014005400039000001800600043d00000000006504350000016005400039000001a00600043d00000000006504350000018005400039000001c00600043d0000000007000019000000006806043400000000058504360000000108700039000000030770008c0000000007080019000003910000413d0000020005400039000001e00600043d00000260070000390000000000750435000002a00540003900000000070604330000000000750435000002c005400039000000000807004b000003a90000613d000000000800001900000000095800190000002008800039000000000a680019000000000a0a04330000000000a90435000000000978004b000003a20000413d000000000657001900000000000604350000001f06700039000000000626016f00000220084000390000028009600039000002000700043d0000000000980435000000000556001900000000060704330000000005650436000000000806004b000003be0000613d000000000800001900000000095800190000002008800039000000000a780019000000000a0a04330000000000a90435000000000968004b000003b70000413d000000000756001900000000000704350000001f06600039000000000626016f0000000006560019000000400500008a000000000545004900000240084000390000000009560019000002200700043d000000000098043500000000080704330000000006860436000000000908004b000003d40000613d00000000090000190000002007700039000000000a0704330000000006a604360000000109900039000000000a89004b000003ce0000413d00000000075600190000026009400039000002400800043d000000000079043500000000070804330000000006760436000000000907004b000003e40000613d0000000009000019000000000a6900190000002009900039000000000b890019000000000b0b04330000000000ba0435000000000a79004b000003dd0000413d000000000867001900000000000804350000001f07700039000000000727016f000000000667001900000000055600190000028008400039000002600700043d000000000058043500000000050704330000000006560436000000000805004b000003f90000613d000000000800001900000000096800190000002008800039000000000a780019000000000a0a04330000000000a90435000000000958004b000003f20000413d0000000007650019000000000007043500000000064600490000001f05500039000000000525016f0000000005650019000000200650008a00000000006404350000001f05500039000000000525016f0000000002450019000000000552004b00000000050000190000000105004039000001420620009c0000022a0000213d00000001055001900000022a0000c13d000000400020043f000001000500043d0000e5c7675000c90000e5c78670011a000000000665004b000004370000c13d0000000006040433000000e00400043d0000014408700041000001450970009c000004370000213d0000014609700041000000000a89004b000004370000213d000000000a06004b000000000a000019000004260000613d00000000ab6800a900000000ca6b00d9000000000a8a004b000004370000c13d000000000a0b004b000000000a000019000004260000613d000000010ab0008a00000147baa0012a000000010aa000390000000a099002700000000109900039000000000ba9004b00000000090aa01900000000ba4800a900000000b88a00d9000000000848004b000004370000c13d0000014808a00041000001490ba0009c000004370000213d0000014a07700041000001480b70009c000004370000413d0000014b0aa0004100000000088a004b0000047c0000a13d0000015401000041000000000010043500000011010000390000022d0000013d000000c00100043d000001590110009c000004420000413d000000400100043d000000440210003900000163030000410000049d0000013d000001600100043d000000000101004b000004530000c13d000001a00100043d000000000101004b000004570000c13d000001c00100043d0000000034010434000000000404004b0000045b0000c13d0000000003030433000001590330009c0000045f0000413d000000400100043d000000440210003900000162030000410000049d0000013d000000400100043d00000044021000390000015a030000410000049d0000013d000000400100043d00000044021000390000015b030000410000049d0000013d000000400100043d00000044021000390000015c030000410000049d0000013d00000040031000390000000003030433000000000303004b000004740000c13d00000060011000390000000001010433000000000101004b000004780000c13d000002000100043d0000000001010433000000000101004b000004840000c13d000002400100043d0000000001010433000000000101004b000004900000c13d0000000001020433000000000101004b0000049a0000c13d0000000001000019000004f20001042e000000400100043d00000044021000390000015d030000410000049d0000013d000000400100043d00000044021000390000015e030000410000049d0000013d00000000877a00d9000000000879004b0000000007092019000000000874004b000004880000813d00000044012000390000015704000041000004b10000013d000000400100043d00000044021000390000015f030000410000049d0000013d00000000077400490000002401100370000000000101043b000000000117004b000004940000a13d00000044012000390000015604000041000004b10000013d000000400100043d000000440210003900000160030000410000049d0000013d000000000105004b000004ac0000c13d0000015401000041000000000010043500000012010000390000022d0000013d000000400100043d000000440210003900000161030000410000000000320435000000240210003900000002030000390000000000320435000001510200004100000000002104350000000402100039000000200300003900000000003204350000013e020000410000013e0310009c0000000001028019000000400110021000000152011001c7000004f30001043000000000715700d90000014c0110009c000004bd0000413d00000044012000390000015304000041000000000041043500000024012000390000000204000039000000000041043500000151010000410000000000120435000000040120003900000000003104350000013e010000410000013e0320009c0000000001024019000004a90000013d0000014d07000041000002200100043d0000000001010433000000000806004b000004ca0000613d00000678986000c900000000966800d9000006780660008c000004370000c13d000000000608004b000000010680c08a000002207660c11a0000014e0760c041000009a9861000c9000000000801004b000004d00000613d00000000981600d9000009a90880008c000004370000c13d000000000667001a000004370000413d0000014f070000410000014f0860009c000000000607a01900000058875000c9000000589870011a000000000885004b000004370000c13d000000000801004b0000000008000019000004e50000c13d000000000178001a000004370000413d000000000161001a000004370000413d000000000141004b000004720000a13d00000044012000390000015004000041000004b10000013d000000060910021000000000811900d9000000400110008c000004370000c13d000000000109004b0000000008000019000004dc0000613d00000000185900a900000000919800d9000000000151004b000004370000c13d000004dc0000013d000004f100000432000004f20001042e000004f300010430000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ffffffff000000020000000000000000000000000000004000000100000000000000000000000000000000000000000000000000000000000000000000000000e0ecaa9100000000000000000000000000000000000000000000000000000000c4d94039000000000000000000000000000000000000000000000000ffffffffffffffff80000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000124f80ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffedb07f0000000000000000000000000000000000000000000000000000000000124f7f0000000000000000000000000000000000000000000000000000000000042aec0000000000000000000000000000000000000000000000000000000004c4b400fffffffffffffffffffffffffffffffffffffffffffffffffffffffffb3b4bff0000000000000000000000000000000000000000000000000000000004d703800000000000000000000000000000000000000000000000000000000004c4b3ff00000000000000000000000000000000000000000000000000000000000182b90000000000000000000000000000000000000000000000000000000000028cf50000000000000000000000000000000000000000000000000000000000028cf6000000000000000000000000000000000000000000000000000000000002a5ac757000000000000000000000000000000000000000000000000000000000000008c379a0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000064000000000000000000000000756b0000000000000000000000000000000000000000000000000000000000004e487b7100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002400000000000000000000000075690000000000000000000000000000000000000000000000000000000000006d79000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000100000000000000000000000000000000000000007563000000000000000000000000000000000000000000000000000000000000756400000000000000000000000000000000000000000000000000000000000075650000000000000000000000000000000000000000000000000000000000007567000000000000000000000000000000000000000000000000000000000000756f0000000000000000000000000000000000000000000000000000000000007568000000000000000000000000000000000000000000000000000000000000756c000000000000000000000000000000000000000000000000000000000000756d00000000000000000000000000000000000000000000000000000000000075660000000000000000000000000000000000000000000000000000000000007562000000000000000000000000000000000000000000000000000000000000756100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007cd3abe6e527f87a4f1fcdcf24a1000cb89175764a3d06cafad9de720f2c629f";
