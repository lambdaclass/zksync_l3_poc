/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface DummyExecutorInterface extends ethers.utils.Interface {
  functions: {
    "commitBatches(tuple,tuple[])": FunctionFragment;
    "executeBatches(tuple[])": FunctionFragment;
    "getName()": FunctionFragment;
    "getTotalBatchesCommitted()": FunctionFragment;
    "getTotalBatchesExecuted()": FunctionFragment;
    "getTotalBatchesVerified()": FunctionFragment;
    "proveBatches(tuple,tuple[],tuple)": FunctionFragment;
    "revertBatches(uint256)": FunctionFragment;
    "setShouldRevertOnCommitBatches(bool)": FunctionFragment;
    "setShouldRevertOnExecuteBatches(bool)": FunctionFragment;
    "setShouldRevertOnProveBatches(bool)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "commitBatches",
    values: [
      {
        batchNumber: BigNumberish;
        batchHash: BytesLike;
        indexRepeatedStorageChanges: BigNumberish;
        numberOfLayer1Txs: BigNumberish;
        priorityOperationsHash: BytesLike;
        l2LogsTreeRoot: BytesLike;
        timestamp: BigNumberish;
        commitment: BytesLike;
      },
      {
        batchNumber: BigNumberish;
        timestamp: BigNumberish;
        indexRepeatedStorageChanges: BigNumberish;
        newStateRoot: BytesLike;
        numberOfLayer1Txs: BigNumberish;
        priorityOperationsHash: BytesLike;
        bootloaderHeapInitialContentsHash: BytesLike;
        eventsQueueStateHash: BytesLike;
        systemLogs: BytesLike;
        totalL2ToL1Pubdata: BytesLike;
      }[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "executeBatches",
    values: [
      {
        batchNumber: BigNumberish;
        batchHash: BytesLike;
        indexRepeatedStorageChanges: BigNumberish;
        numberOfLayer1Txs: BigNumberish;
        priorityOperationsHash: BytesLike;
        l2LogsTreeRoot: BytesLike;
        timestamp: BigNumberish;
        commitment: BytesLike;
      }[]
    ]
  ): string;
  encodeFunctionData(functionFragment: "getName", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getTotalBatchesCommitted",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTotalBatchesExecuted",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTotalBatchesVerified",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "proveBatches",
    values: [
      {
        batchNumber: BigNumberish;
        batchHash: BytesLike;
        indexRepeatedStorageChanges: BigNumberish;
        numberOfLayer1Txs: BigNumberish;
        priorityOperationsHash: BytesLike;
        l2LogsTreeRoot: BytesLike;
        timestamp: BigNumberish;
        commitment: BytesLike;
      },
      {
        batchNumber: BigNumberish;
        batchHash: BytesLike;
        indexRepeatedStorageChanges: BigNumberish;
        numberOfLayer1Txs: BigNumberish;
        priorityOperationsHash: BytesLike;
        l2LogsTreeRoot: BytesLike;
        timestamp: BigNumberish;
        commitment: BytesLike;
      }[],
      {
        recursiveAggregationInput: BigNumberish[];
        serializedProof: BigNumberish[];
      }
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "revertBatches",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setShouldRevertOnCommitBatches",
    values: [boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setShouldRevertOnExecuteBatches",
    values: [boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setShouldRevertOnProveBatches",
    values: [boolean]
  ): string;

  decodeFunctionResult(
    functionFragment: "commitBatches",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeBatches",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getName", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getTotalBatchesCommitted",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTotalBatchesExecuted",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTotalBatchesVerified",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "proveBatches",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "revertBatches",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setShouldRevertOnCommitBatches",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setShouldRevertOnExecuteBatches",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setShouldRevertOnProveBatches",
    data: BytesLike
  ): Result;

  events: {
    "BlockCommit(uint256,bytes32,bytes32)": EventFragment;
    "BlockExecution(uint256,bytes32,bytes32)": EventFragment;
    "BlocksRevert(uint256,uint256,uint256)": EventFragment;
    "BlocksVerification(uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "BlockCommit"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BlockExecution"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BlocksRevert"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BlocksVerification"): EventFragment;
}

export class DummyExecutor extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: DummyExecutorInterface;

  functions: {
    commitBatches(
      _lastCommittedBatchData: {
        batchNumber: BigNumberish;
        batchHash: BytesLike;
        indexRepeatedStorageChanges: BigNumberish;
        numberOfLayer1Txs: BigNumberish;
        priorityOperationsHash: BytesLike;
        l2LogsTreeRoot: BytesLike;
        timestamp: BigNumberish;
        commitment: BytesLike;
      },
      _newBatchesData: {
        batchNumber: BigNumberish;
        timestamp: BigNumberish;
        indexRepeatedStorageChanges: BigNumberish;
        newStateRoot: BytesLike;
        numberOfLayer1Txs: BigNumberish;
        priorityOperationsHash: BytesLike;
        bootloaderHeapInitialContentsHash: BytesLike;
        eventsQueueStateHash: BytesLike;
        systemLogs: BytesLike;
        totalL2ToL1Pubdata: BytesLike;
      }[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "commitBatches((uint64,bytes32,uint64,uint256,bytes32,bytes32,uint256,bytes32),tuple[])"(
      _lastCommittedBatchData: {
        batchNumber: BigNumberish;
        batchHash: BytesLike;
        indexRepeatedStorageChanges: BigNumberish;
        numberOfLayer1Txs: BigNumberish;
        priorityOperationsHash: BytesLike;
        l2LogsTreeRoot: BytesLike;
        timestamp: BigNumberish;
        commitment: BytesLike;
      },
      _newBatchesData: {
        batchNumber: BigNumberish;
        timestamp: BigNumberish;
        indexRepeatedStorageChanges: BigNumberish;
        newStateRoot: BytesLike;
        numberOfLayer1Txs: BigNumberish;
        priorityOperationsHash: BytesLike;
        bootloaderHeapInitialContentsHash: BytesLike;
        eventsQueueStateHash: BytesLike;
        systemLogs: BytesLike;
        totalL2ToL1Pubdata: BytesLike;
      }[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    executeBatches(
      _batchesData: {
        batchNumber: BigNumberish;
        batchHash: BytesLike;
        indexRepeatedStorageChanges: BigNumberish;
        numberOfLayer1Txs: BigNumberish;
        priorityOperationsHash: BytesLike;
        l2LogsTreeRoot: BytesLike;
        timestamp: BigNumberish;
        commitment: BytesLike;
      }[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "executeBatches(tuple[])"(
      _batchesData: {
        batchNumber: BigNumberish;
        batchHash: BytesLike;
        indexRepeatedStorageChanges: BigNumberish;
        numberOfLayer1Txs: BigNumberish;
        priorityOperationsHash: BytesLike;
        l2LogsTreeRoot: BytesLike;
        timestamp: BigNumberish;
        commitment: BytesLike;
      }[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    getName(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "getName()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    getTotalBatchesCommitted(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "getTotalBatchesCommitted()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    getTotalBatchesExecuted(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "getTotalBatchesExecuted()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    getTotalBatchesVerified(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "getTotalBatchesVerified()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    proveBatches(
      _prevBatch: {
        batchNumber: BigNumberish;
        batchHash: BytesLike;
        indexRepeatedStorageChanges: BigNumberish;
        numberOfLayer1Txs: BigNumberish;
        priorityOperationsHash: BytesLike;
        l2LogsTreeRoot: BytesLike;
        timestamp: BigNumberish;
        commitment: BytesLike;
      },
      _committedBatches: {
        batchNumber: BigNumberish;
        batchHash: BytesLike;
        indexRepeatedStorageChanges: BigNumberish;
        numberOfLayer1Txs: BigNumberish;
        priorityOperationsHash: BytesLike;
        l2LogsTreeRoot: BytesLike;
        timestamp: BigNumberish;
        commitment: BytesLike;
      }[],
      arg2: {
        recursiveAggregationInput: BigNumberish[];
        serializedProof: BigNumberish[];
      },
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "proveBatches((uint64,bytes32,uint64,uint256,bytes32,bytes32,uint256,bytes32),tuple[],(uint256[],uint256[]))"(
      _prevBatch: {
        batchNumber: BigNumberish;
        batchHash: BytesLike;
        indexRepeatedStorageChanges: BigNumberish;
        numberOfLayer1Txs: BigNumberish;
        priorityOperationsHash: BytesLike;
        l2LogsTreeRoot: BytesLike;
        timestamp: BigNumberish;
        commitment: BytesLike;
      },
      _committedBatches: {
        batchNumber: BigNumberish;
        batchHash: BytesLike;
        indexRepeatedStorageChanges: BigNumberish;
        numberOfLayer1Txs: BigNumberish;
        priorityOperationsHash: BytesLike;
        l2LogsTreeRoot: BytesLike;
        timestamp: BigNumberish;
        commitment: BytesLike;
      }[],
      arg2: {
        recursiveAggregationInput: BigNumberish[];
        serializedProof: BigNumberish[];
      },
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    revertBatches(
      _newLastBatch: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "revertBatches(uint256)"(
      _newLastBatch: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setShouldRevertOnCommitBatches(
      _shouldRevert: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setShouldRevertOnCommitBatches(bool)"(
      _shouldRevert: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setShouldRevertOnExecuteBatches(
      _shouldRevert: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setShouldRevertOnExecuteBatches(bool)"(
      _shouldRevert: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setShouldRevertOnProveBatches(
      _shouldRevert: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setShouldRevertOnProveBatches(bool)"(
      _shouldRevert: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  commitBatches(
    _lastCommittedBatchData: {
      batchNumber: BigNumberish;
      batchHash: BytesLike;
      indexRepeatedStorageChanges: BigNumberish;
      numberOfLayer1Txs: BigNumberish;
      priorityOperationsHash: BytesLike;
      l2LogsTreeRoot: BytesLike;
      timestamp: BigNumberish;
      commitment: BytesLike;
    },
    _newBatchesData: {
      batchNumber: BigNumberish;
      timestamp: BigNumberish;
      indexRepeatedStorageChanges: BigNumberish;
      newStateRoot: BytesLike;
      numberOfLayer1Txs: BigNumberish;
      priorityOperationsHash: BytesLike;
      bootloaderHeapInitialContentsHash: BytesLike;
      eventsQueueStateHash: BytesLike;
      systemLogs: BytesLike;
      totalL2ToL1Pubdata: BytesLike;
    }[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "commitBatches((uint64,bytes32,uint64,uint256,bytes32,bytes32,uint256,bytes32),tuple[])"(
    _lastCommittedBatchData: {
      batchNumber: BigNumberish;
      batchHash: BytesLike;
      indexRepeatedStorageChanges: BigNumberish;
      numberOfLayer1Txs: BigNumberish;
      priorityOperationsHash: BytesLike;
      l2LogsTreeRoot: BytesLike;
      timestamp: BigNumberish;
      commitment: BytesLike;
    },
    _newBatchesData: {
      batchNumber: BigNumberish;
      timestamp: BigNumberish;
      indexRepeatedStorageChanges: BigNumberish;
      newStateRoot: BytesLike;
      numberOfLayer1Txs: BigNumberish;
      priorityOperationsHash: BytesLike;
      bootloaderHeapInitialContentsHash: BytesLike;
      eventsQueueStateHash: BytesLike;
      systemLogs: BytesLike;
      totalL2ToL1Pubdata: BytesLike;
    }[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  executeBatches(
    _batchesData: {
      batchNumber: BigNumberish;
      batchHash: BytesLike;
      indexRepeatedStorageChanges: BigNumberish;
      numberOfLayer1Txs: BigNumberish;
      priorityOperationsHash: BytesLike;
      l2LogsTreeRoot: BytesLike;
      timestamp: BigNumberish;
      commitment: BytesLike;
    }[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "executeBatches(tuple[])"(
    _batchesData: {
      batchNumber: BigNumberish;
      batchHash: BytesLike;
      indexRepeatedStorageChanges: BigNumberish;
      numberOfLayer1Txs: BigNumberish;
      priorityOperationsHash: BytesLike;
      l2LogsTreeRoot: BytesLike;
      timestamp: BigNumberish;
      commitment: BytesLike;
    }[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  getName(overrides?: CallOverrides): Promise<string>;

  "getName()"(overrides?: CallOverrides): Promise<string>;

  getTotalBatchesCommitted(overrides?: CallOverrides): Promise<BigNumber>;

  "getTotalBatchesCommitted()"(overrides?: CallOverrides): Promise<BigNumber>;

  getTotalBatchesExecuted(overrides?: CallOverrides): Promise<BigNumber>;

  "getTotalBatchesExecuted()"(overrides?: CallOverrides): Promise<BigNumber>;

  getTotalBatchesVerified(overrides?: CallOverrides): Promise<BigNumber>;

  "getTotalBatchesVerified()"(overrides?: CallOverrides): Promise<BigNumber>;

  proveBatches(
    _prevBatch: {
      batchNumber: BigNumberish;
      batchHash: BytesLike;
      indexRepeatedStorageChanges: BigNumberish;
      numberOfLayer1Txs: BigNumberish;
      priorityOperationsHash: BytesLike;
      l2LogsTreeRoot: BytesLike;
      timestamp: BigNumberish;
      commitment: BytesLike;
    },
    _committedBatches: {
      batchNumber: BigNumberish;
      batchHash: BytesLike;
      indexRepeatedStorageChanges: BigNumberish;
      numberOfLayer1Txs: BigNumberish;
      priorityOperationsHash: BytesLike;
      l2LogsTreeRoot: BytesLike;
      timestamp: BigNumberish;
      commitment: BytesLike;
    }[],
    arg2: {
      recursiveAggregationInput: BigNumberish[];
      serializedProof: BigNumberish[];
    },
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "proveBatches((uint64,bytes32,uint64,uint256,bytes32,bytes32,uint256,bytes32),tuple[],(uint256[],uint256[]))"(
    _prevBatch: {
      batchNumber: BigNumberish;
      batchHash: BytesLike;
      indexRepeatedStorageChanges: BigNumberish;
      numberOfLayer1Txs: BigNumberish;
      priorityOperationsHash: BytesLike;
      l2LogsTreeRoot: BytesLike;
      timestamp: BigNumberish;
      commitment: BytesLike;
    },
    _committedBatches: {
      batchNumber: BigNumberish;
      batchHash: BytesLike;
      indexRepeatedStorageChanges: BigNumberish;
      numberOfLayer1Txs: BigNumberish;
      priorityOperationsHash: BytesLike;
      l2LogsTreeRoot: BytesLike;
      timestamp: BigNumberish;
      commitment: BytesLike;
    }[],
    arg2: {
      recursiveAggregationInput: BigNumberish[];
      serializedProof: BigNumberish[];
    },
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  revertBatches(
    _newLastBatch: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "revertBatches(uint256)"(
    _newLastBatch: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setShouldRevertOnCommitBatches(
    _shouldRevert: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setShouldRevertOnCommitBatches(bool)"(
    _shouldRevert: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setShouldRevertOnExecuteBatches(
    _shouldRevert: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setShouldRevertOnExecuteBatches(bool)"(
    _shouldRevert: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setShouldRevertOnProveBatches(
    _shouldRevert: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setShouldRevertOnProveBatches(bool)"(
    _shouldRevert: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    commitBatches(
      _lastCommittedBatchData: {
        batchNumber: BigNumberish;
        batchHash: BytesLike;
        indexRepeatedStorageChanges: BigNumberish;
        numberOfLayer1Txs: BigNumberish;
        priorityOperationsHash: BytesLike;
        l2LogsTreeRoot: BytesLike;
        timestamp: BigNumberish;
        commitment: BytesLike;
      },
      _newBatchesData: {
        batchNumber: BigNumberish;
        timestamp: BigNumberish;
        indexRepeatedStorageChanges: BigNumberish;
        newStateRoot: BytesLike;
        numberOfLayer1Txs: BigNumberish;
        priorityOperationsHash: BytesLike;
        bootloaderHeapInitialContentsHash: BytesLike;
        eventsQueueStateHash: BytesLike;
        systemLogs: BytesLike;
        totalL2ToL1Pubdata: BytesLike;
      }[],
      overrides?: CallOverrides
    ): Promise<void>;

    "commitBatches((uint64,bytes32,uint64,uint256,bytes32,bytes32,uint256,bytes32),tuple[])"(
      _lastCommittedBatchData: {
        batchNumber: BigNumberish;
        batchHash: BytesLike;
        indexRepeatedStorageChanges: BigNumberish;
        numberOfLayer1Txs: BigNumberish;
        priorityOperationsHash: BytesLike;
        l2LogsTreeRoot: BytesLike;
        timestamp: BigNumberish;
        commitment: BytesLike;
      },
      _newBatchesData: {
        batchNumber: BigNumberish;
        timestamp: BigNumberish;
        indexRepeatedStorageChanges: BigNumberish;
        newStateRoot: BytesLike;
        numberOfLayer1Txs: BigNumberish;
        priorityOperationsHash: BytesLike;
        bootloaderHeapInitialContentsHash: BytesLike;
        eventsQueueStateHash: BytesLike;
        systemLogs: BytesLike;
        totalL2ToL1Pubdata: BytesLike;
      }[],
      overrides?: CallOverrides
    ): Promise<void>;

    executeBatches(
      _batchesData: {
        batchNumber: BigNumberish;
        batchHash: BytesLike;
        indexRepeatedStorageChanges: BigNumberish;
        numberOfLayer1Txs: BigNumberish;
        priorityOperationsHash: BytesLike;
        l2LogsTreeRoot: BytesLike;
        timestamp: BigNumberish;
        commitment: BytesLike;
      }[],
      overrides?: CallOverrides
    ): Promise<void>;

    "executeBatches(tuple[])"(
      _batchesData: {
        batchNumber: BigNumberish;
        batchHash: BytesLike;
        indexRepeatedStorageChanges: BigNumberish;
        numberOfLayer1Txs: BigNumberish;
        priorityOperationsHash: BytesLike;
        l2LogsTreeRoot: BytesLike;
        timestamp: BigNumberish;
        commitment: BytesLike;
      }[],
      overrides?: CallOverrides
    ): Promise<void>;

    getName(overrides?: CallOverrides): Promise<string>;

    "getName()"(overrides?: CallOverrides): Promise<string>;

    getTotalBatchesCommitted(overrides?: CallOverrides): Promise<BigNumber>;

    "getTotalBatchesCommitted()"(overrides?: CallOverrides): Promise<BigNumber>;

    getTotalBatchesExecuted(overrides?: CallOverrides): Promise<BigNumber>;

    "getTotalBatchesExecuted()"(overrides?: CallOverrides): Promise<BigNumber>;

    getTotalBatchesVerified(overrides?: CallOverrides): Promise<BigNumber>;

    "getTotalBatchesVerified()"(overrides?: CallOverrides): Promise<BigNumber>;

    proveBatches(
      _prevBatch: {
        batchNumber: BigNumberish;
        batchHash: BytesLike;
        indexRepeatedStorageChanges: BigNumberish;
        numberOfLayer1Txs: BigNumberish;
        priorityOperationsHash: BytesLike;
        l2LogsTreeRoot: BytesLike;
        timestamp: BigNumberish;
        commitment: BytesLike;
      },
      _committedBatches: {
        batchNumber: BigNumberish;
        batchHash: BytesLike;
        indexRepeatedStorageChanges: BigNumberish;
        numberOfLayer1Txs: BigNumberish;
        priorityOperationsHash: BytesLike;
        l2LogsTreeRoot: BytesLike;
        timestamp: BigNumberish;
        commitment: BytesLike;
      }[],
      arg2: {
        recursiveAggregationInput: BigNumberish[];
        serializedProof: BigNumberish[];
      },
      overrides?: CallOverrides
    ): Promise<void>;

    "proveBatches((uint64,bytes32,uint64,uint256,bytes32,bytes32,uint256,bytes32),tuple[],(uint256[],uint256[]))"(
      _prevBatch: {
        batchNumber: BigNumberish;
        batchHash: BytesLike;
        indexRepeatedStorageChanges: BigNumberish;
        numberOfLayer1Txs: BigNumberish;
        priorityOperationsHash: BytesLike;
        l2LogsTreeRoot: BytesLike;
        timestamp: BigNumberish;
        commitment: BytesLike;
      },
      _committedBatches: {
        batchNumber: BigNumberish;
        batchHash: BytesLike;
        indexRepeatedStorageChanges: BigNumberish;
        numberOfLayer1Txs: BigNumberish;
        priorityOperationsHash: BytesLike;
        l2LogsTreeRoot: BytesLike;
        timestamp: BigNumberish;
        commitment: BytesLike;
      }[],
      arg2: {
        recursiveAggregationInput: BigNumberish[];
        serializedProof: BigNumberish[];
      },
      overrides?: CallOverrides
    ): Promise<void>;

    revertBatches(
      _newLastBatch: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "revertBatches(uint256)"(
      _newLastBatch: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setShouldRevertOnCommitBatches(
      _shouldRevert: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    "setShouldRevertOnCommitBatches(bool)"(
      _shouldRevert: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    setShouldRevertOnExecuteBatches(
      _shouldRevert: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    "setShouldRevertOnExecuteBatches(bool)"(
      _shouldRevert: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    setShouldRevertOnProveBatches(
      _shouldRevert: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    "setShouldRevertOnProveBatches(bool)"(
      _shouldRevert: boolean,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    BlockCommit(
      batchNumber: BigNumberish | null,
      batchHash: BytesLike | null,
      commitment: BytesLike | null
    ): EventFilter;

    BlockExecution(
      batchNumber: BigNumberish | null,
      batchHash: BytesLike | null,
      commitment: BytesLike | null
    ): EventFilter;

    BlocksRevert(
      totalBatchesCommitted: null,
      totalBatchesVerified: null,
      totalBatchesExecuted: null
    ): EventFilter;

    BlocksVerification(
      previousLastVerifiedBatch: BigNumberish | null,
      currentLastVerifiedBatch: BigNumberish | null
    ): EventFilter;
  };

  estimateGas: {
    commitBatches(
      _lastCommittedBatchData: {
        batchNumber: BigNumberish;
        batchHash: BytesLike;
        indexRepeatedStorageChanges: BigNumberish;
        numberOfLayer1Txs: BigNumberish;
        priorityOperationsHash: BytesLike;
        l2LogsTreeRoot: BytesLike;
        timestamp: BigNumberish;
        commitment: BytesLike;
      },
      _newBatchesData: {
        batchNumber: BigNumberish;
        timestamp: BigNumberish;
        indexRepeatedStorageChanges: BigNumberish;
        newStateRoot: BytesLike;
        numberOfLayer1Txs: BigNumberish;
        priorityOperationsHash: BytesLike;
        bootloaderHeapInitialContentsHash: BytesLike;
        eventsQueueStateHash: BytesLike;
        systemLogs: BytesLike;
        totalL2ToL1Pubdata: BytesLike;
      }[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    "commitBatches((uint64,bytes32,uint64,uint256,bytes32,bytes32,uint256,bytes32),tuple[])"(
      _lastCommittedBatchData: {
        batchNumber: BigNumberish;
        batchHash: BytesLike;
        indexRepeatedStorageChanges: BigNumberish;
        numberOfLayer1Txs: BigNumberish;
        priorityOperationsHash: BytesLike;
        l2LogsTreeRoot: BytesLike;
        timestamp: BigNumberish;
        commitment: BytesLike;
      },
      _newBatchesData: {
        batchNumber: BigNumberish;
        timestamp: BigNumberish;
        indexRepeatedStorageChanges: BigNumberish;
        newStateRoot: BytesLike;
        numberOfLayer1Txs: BigNumberish;
        priorityOperationsHash: BytesLike;
        bootloaderHeapInitialContentsHash: BytesLike;
        eventsQueueStateHash: BytesLike;
        systemLogs: BytesLike;
        totalL2ToL1Pubdata: BytesLike;
      }[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    executeBatches(
      _batchesData: {
        batchNumber: BigNumberish;
        batchHash: BytesLike;
        indexRepeatedStorageChanges: BigNumberish;
        numberOfLayer1Txs: BigNumberish;
        priorityOperationsHash: BytesLike;
        l2LogsTreeRoot: BytesLike;
        timestamp: BigNumberish;
        commitment: BytesLike;
      }[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    "executeBatches(tuple[])"(
      _batchesData: {
        batchNumber: BigNumberish;
        batchHash: BytesLike;
        indexRepeatedStorageChanges: BigNumberish;
        numberOfLayer1Txs: BigNumberish;
        priorityOperationsHash: BytesLike;
        l2LogsTreeRoot: BytesLike;
        timestamp: BigNumberish;
        commitment: BytesLike;
      }[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    getName(overrides?: CallOverrides): Promise<BigNumber>;

    "getName()"(overrides?: CallOverrides): Promise<BigNumber>;

    getTotalBatchesCommitted(overrides?: CallOverrides): Promise<BigNumber>;

    "getTotalBatchesCommitted()"(overrides?: CallOverrides): Promise<BigNumber>;

    getTotalBatchesExecuted(overrides?: CallOverrides): Promise<BigNumber>;

    "getTotalBatchesExecuted()"(overrides?: CallOverrides): Promise<BigNumber>;

    getTotalBatchesVerified(overrides?: CallOverrides): Promise<BigNumber>;

    "getTotalBatchesVerified()"(overrides?: CallOverrides): Promise<BigNumber>;

    proveBatches(
      _prevBatch: {
        batchNumber: BigNumberish;
        batchHash: BytesLike;
        indexRepeatedStorageChanges: BigNumberish;
        numberOfLayer1Txs: BigNumberish;
        priorityOperationsHash: BytesLike;
        l2LogsTreeRoot: BytesLike;
        timestamp: BigNumberish;
        commitment: BytesLike;
      },
      _committedBatches: {
        batchNumber: BigNumberish;
        batchHash: BytesLike;
        indexRepeatedStorageChanges: BigNumberish;
        numberOfLayer1Txs: BigNumberish;
        priorityOperationsHash: BytesLike;
        l2LogsTreeRoot: BytesLike;
        timestamp: BigNumberish;
        commitment: BytesLike;
      }[],
      arg2: {
        recursiveAggregationInput: BigNumberish[];
        serializedProof: BigNumberish[];
      },
      overrides?: Overrides
    ): Promise<BigNumber>;

    "proveBatches((uint64,bytes32,uint64,uint256,bytes32,bytes32,uint256,bytes32),tuple[],(uint256[],uint256[]))"(
      _prevBatch: {
        batchNumber: BigNumberish;
        batchHash: BytesLike;
        indexRepeatedStorageChanges: BigNumberish;
        numberOfLayer1Txs: BigNumberish;
        priorityOperationsHash: BytesLike;
        l2LogsTreeRoot: BytesLike;
        timestamp: BigNumberish;
        commitment: BytesLike;
      },
      _committedBatches: {
        batchNumber: BigNumberish;
        batchHash: BytesLike;
        indexRepeatedStorageChanges: BigNumberish;
        numberOfLayer1Txs: BigNumberish;
        priorityOperationsHash: BytesLike;
        l2LogsTreeRoot: BytesLike;
        timestamp: BigNumberish;
        commitment: BytesLike;
      }[],
      arg2: {
        recursiveAggregationInput: BigNumberish[];
        serializedProof: BigNumberish[];
      },
      overrides?: Overrides
    ): Promise<BigNumber>;

    revertBatches(
      _newLastBatch: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "revertBatches(uint256)"(
      _newLastBatch: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setShouldRevertOnCommitBatches(
      _shouldRevert: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setShouldRevertOnCommitBatches(bool)"(
      _shouldRevert: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setShouldRevertOnExecuteBatches(
      _shouldRevert: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setShouldRevertOnExecuteBatches(bool)"(
      _shouldRevert: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setShouldRevertOnProveBatches(
      _shouldRevert: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setShouldRevertOnProveBatches(bool)"(
      _shouldRevert: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    commitBatches(
      _lastCommittedBatchData: {
        batchNumber: BigNumberish;
        batchHash: BytesLike;
        indexRepeatedStorageChanges: BigNumberish;
        numberOfLayer1Txs: BigNumberish;
        priorityOperationsHash: BytesLike;
        l2LogsTreeRoot: BytesLike;
        timestamp: BigNumberish;
        commitment: BytesLike;
      },
      _newBatchesData: {
        batchNumber: BigNumberish;
        timestamp: BigNumberish;
        indexRepeatedStorageChanges: BigNumberish;
        newStateRoot: BytesLike;
        numberOfLayer1Txs: BigNumberish;
        priorityOperationsHash: BytesLike;
        bootloaderHeapInitialContentsHash: BytesLike;
        eventsQueueStateHash: BytesLike;
        systemLogs: BytesLike;
        totalL2ToL1Pubdata: BytesLike;
      }[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "commitBatches((uint64,bytes32,uint64,uint256,bytes32,bytes32,uint256,bytes32),tuple[])"(
      _lastCommittedBatchData: {
        batchNumber: BigNumberish;
        batchHash: BytesLike;
        indexRepeatedStorageChanges: BigNumberish;
        numberOfLayer1Txs: BigNumberish;
        priorityOperationsHash: BytesLike;
        l2LogsTreeRoot: BytesLike;
        timestamp: BigNumberish;
        commitment: BytesLike;
      },
      _newBatchesData: {
        batchNumber: BigNumberish;
        timestamp: BigNumberish;
        indexRepeatedStorageChanges: BigNumberish;
        newStateRoot: BytesLike;
        numberOfLayer1Txs: BigNumberish;
        priorityOperationsHash: BytesLike;
        bootloaderHeapInitialContentsHash: BytesLike;
        eventsQueueStateHash: BytesLike;
        systemLogs: BytesLike;
        totalL2ToL1Pubdata: BytesLike;
      }[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    executeBatches(
      _batchesData: {
        batchNumber: BigNumberish;
        batchHash: BytesLike;
        indexRepeatedStorageChanges: BigNumberish;
        numberOfLayer1Txs: BigNumberish;
        priorityOperationsHash: BytesLike;
        l2LogsTreeRoot: BytesLike;
        timestamp: BigNumberish;
        commitment: BytesLike;
      }[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "executeBatches(tuple[])"(
      _batchesData: {
        batchNumber: BigNumberish;
        batchHash: BytesLike;
        indexRepeatedStorageChanges: BigNumberish;
        numberOfLayer1Txs: BigNumberish;
        priorityOperationsHash: BytesLike;
        l2LogsTreeRoot: BytesLike;
        timestamp: BigNumberish;
        commitment: BytesLike;
      }[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    getName(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getName()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getTotalBatchesCommitted(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getTotalBatchesCommitted()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTotalBatchesExecuted(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getTotalBatchesExecuted()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTotalBatchesVerified(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getTotalBatchesVerified()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    proveBatches(
      _prevBatch: {
        batchNumber: BigNumberish;
        batchHash: BytesLike;
        indexRepeatedStorageChanges: BigNumberish;
        numberOfLayer1Txs: BigNumberish;
        priorityOperationsHash: BytesLike;
        l2LogsTreeRoot: BytesLike;
        timestamp: BigNumberish;
        commitment: BytesLike;
      },
      _committedBatches: {
        batchNumber: BigNumberish;
        batchHash: BytesLike;
        indexRepeatedStorageChanges: BigNumberish;
        numberOfLayer1Txs: BigNumberish;
        priorityOperationsHash: BytesLike;
        l2LogsTreeRoot: BytesLike;
        timestamp: BigNumberish;
        commitment: BytesLike;
      }[],
      arg2: {
        recursiveAggregationInput: BigNumberish[];
        serializedProof: BigNumberish[];
      },
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "proveBatches((uint64,bytes32,uint64,uint256,bytes32,bytes32,uint256,bytes32),tuple[],(uint256[],uint256[]))"(
      _prevBatch: {
        batchNumber: BigNumberish;
        batchHash: BytesLike;
        indexRepeatedStorageChanges: BigNumberish;
        numberOfLayer1Txs: BigNumberish;
        priorityOperationsHash: BytesLike;
        l2LogsTreeRoot: BytesLike;
        timestamp: BigNumberish;
        commitment: BytesLike;
      },
      _committedBatches: {
        batchNumber: BigNumberish;
        batchHash: BytesLike;
        indexRepeatedStorageChanges: BigNumberish;
        numberOfLayer1Txs: BigNumberish;
        priorityOperationsHash: BytesLike;
        l2LogsTreeRoot: BytesLike;
        timestamp: BigNumberish;
        commitment: BytesLike;
      }[],
      arg2: {
        recursiveAggregationInput: BigNumberish[];
        serializedProof: BigNumberish[];
      },
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    revertBatches(
      _newLastBatch: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "revertBatches(uint256)"(
      _newLastBatch: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setShouldRevertOnCommitBatches(
      _shouldRevert: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setShouldRevertOnCommitBatches(bool)"(
      _shouldRevert: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setShouldRevertOnExecuteBatches(
      _shouldRevert: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setShouldRevertOnExecuteBatches(bool)"(
      _shouldRevert: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setShouldRevertOnProveBatches(
      _shouldRevert: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setShouldRevertOnProveBatches(bool)"(
      _shouldRevert: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
