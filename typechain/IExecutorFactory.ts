/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { IExecutor } from "./IExecutor";

export class IExecutorFactory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IExecutor {
    return new Contract(address, _abi, signerOrProvider) as IExecutor;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "batchNumber",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "batchHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "commitment",
        type: "bytes32",
      },
    ],
    name: "BlockCommit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "batchNumber",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "batchHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "commitment",
        type: "bytes32",
      },
    ],
    name: "BlockExecution",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "totalBatchesCommitted",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "totalBatchesVerified",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "totalBatchesExecuted",
        type: "uint256",
      },
    ],
    name: "BlocksRevert",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "previousLastVerifiedBatch",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "currentLastVerifiedBatch",
        type: "uint256",
      },
    ],
    name: "BlocksVerification",
    type: "event",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint64",
            name: "batchNumber",
            type: "uint64",
          },
          {
            internalType: "bytes32",
            name: "batchHash",
            type: "bytes32",
          },
          {
            internalType: "uint64",
            name: "indexRepeatedStorageChanges",
            type: "uint64",
          },
          {
            internalType: "uint256",
            name: "numberOfLayer1Txs",
            type: "uint256",
          },
          {
            internalType: "bytes32",
            name: "priorityOperationsHash",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "l2LogsTreeRoot",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "timestamp",
            type: "uint256",
          },
          {
            internalType: "bytes32",
            name: "commitment",
            type: "bytes32",
          },
        ],
        internalType: "struct IExecutor.StoredBatchInfo",
        name: "_lastCommittedBatchData",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "uint64",
            name: "batchNumber",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "timestamp",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "indexRepeatedStorageChanges",
            type: "uint64",
          },
          {
            internalType: "bytes32",
            name: "newStateRoot",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "numberOfLayer1Txs",
            type: "uint256",
          },
          {
            internalType: "bytes32",
            name: "priorityOperationsHash",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "bootloaderHeapInitialContentsHash",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "eventsQueueStateHash",
            type: "bytes32",
          },
          {
            internalType: "bytes",
            name: "systemLogs",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "totalL2ToL1Pubdata",
            type: "bytes",
          },
        ],
        internalType: "struct IExecutor.CommitBatchInfo[]",
        name: "_newBatchesData",
        type: "tuple[]",
      },
    ],
    name: "commitBatches",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint64",
            name: "batchNumber",
            type: "uint64",
          },
          {
            internalType: "bytes32",
            name: "batchHash",
            type: "bytes32",
          },
          {
            internalType: "uint64",
            name: "indexRepeatedStorageChanges",
            type: "uint64",
          },
          {
            internalType: "uint256",
            name: "numberOfLayer1Txs",
            type: "uint256",
          },
          {
            internalType: "bytes32",
            name: "priorityOperationsHash",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "l2LogsTreeRoot",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "timestamp",
            type: "uint256",
          },
          {
            internalType: "bytes32",
            name: "commitment",
            type: "bytes32",
          },
        ],
        internalType: "struct IExecutor.StoredBatchInfo[]",
        name: "_batchesData",
        type: "tuple[]",
      },
    ],
    name: "executeBatches",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getName",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint64",
            name: "batchNumber",
            type: "uint64",
          },
          {
            internalType: "bytes32",
            name: "batchHash",
            type: "bytes32",
          },
          {
            internalType: "uint64",
            name: "indexRepeatedStorageChanges",
            type: "uint64",
          },
          {
            internalType: "uint256",
            name: "numberOfLayer1Txs",
            type: "uint256",
          },
          {
            internalType: "bytes32",
            name: "priorityOperationsHash",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "l2LogsTreeRoot",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "timestamp",
            type: "uint256",
          },
          {
            internalType: "bytes32",
            name: "commitment",
            type: "bytes32",
          },
        ],
        internalType: "struct IExecutor.StoredBatchInfo",
        name: "_prevBatch",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "uint64",
            name: "batchNumber",
            type: "uint64",
          },
          {
            internalType: "bytes32",
            name: "batchHash",
            type: "bytes32",
          },
          {
            internalType: "uint64",
            name: "indexRepeatedStorageChanges",
            type: "uint64",
          },
          {
            internalType: "uint256",
            name: "numberOfLayer1Txs",
            type: "uint256",
          },
          {
            internalType: "bytes32",
            name: "priorityOperationsHash",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "l2LogsTreeRoot",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "timestamp",
            type: "uint256",
          },
          {
            internalType: "bytes32",
            name: "commitment",
            type: "bytes32",
          },
        ],
        internalType: "struct IExecutor.StoredBatchInfo[]",
        name: "_committedBatches",
        type: "tuple[]",
      },
      {
        components: [
          {
            internalType: "uint256[]",
            name: "recursiveAggregationInput",
            type: "uint256[]",
          },
          {
            internalType: "uint256[]",
            name: "serializedProof",
            type: "uint256[]",
          },
        ],
        internalType: "struct IExecutor.ProofInput",
        name: "_proof",
        type: "tuple",
      },
    ],
    name: "proveBatches",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_newLastBatch",
        type: "uint256",
      },
    ],
    name: "revertBatches",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
