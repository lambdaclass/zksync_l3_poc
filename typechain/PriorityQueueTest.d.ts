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

interface PriorityQueueTestInterface extends ethers.utils.Interface {
  functions: {
    "front()": FunctionFragment;
    "getFirstUnprocessedPriorityTx()": FunctionFragment;
    "getSize()": FunctionFragment;
    "getTotalPriorityTxs()": FunctionFragment;
    "isEmpty()": FunctionFragment;
    "popFront()": FunctionFragment;
    "pushBack(tuple)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "front", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getFirstUnprocessedPriorityTx",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "getSize", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getTotalPriorityTxs",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "isEmpty", values?: undefined): string;
  encodeFunctionData(functionFragment: "popFront", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pushBack",
    values: [
      {
        canonicalTxHash: BytesLike;
        expirationTimestamp: BigNumberish;
        layer2Tip: BigNumberish;
      }
    ]
  ): string;

  decodeFunctionResult(functionFragment: "front", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getFirstUnprocessedPriorityTx",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getSize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getTotalPriorityTxs",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isEmpty", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "popFront", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pushBack", data: BytesLike): Result;

  events: {};
}

export class PriorityQueueTest extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: PriorityQueueTestInterface;

  functions: {
    front(overrides?: CallOverrides): Promise<{
      0: {
        canonicalTxHash: string;
        expirationTimestamp: BigNumber;
        layer2Tip: BigNumber;
        0: string;
        1: BigNumber;
        2: BigNumber;
      };
    }>;

    "front()"(overrides?: CallOverrides): Promise<{
      0: {
        canonicalTxHash: string;
        expirationTimestamp: BigNumber;
        layer2Tip: BigNumber;
        0: string;
        1: BigNumber;
        2: BigNumber;
      };
    }>;

    getFirstUnprocessedPriorityTx(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "getFirstUnprocessedPriorityTx()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    getSize(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "getSize()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    getTotalPriorityTxs(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "getTotalPriorityTxs()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    isEmpty(overrides?: CallOverrides): Promise<{
      0: boolean;
    }>;

    "isEmpty()"(overrides?: CallOverrides): Promise<{
      0: boolean;
    }>;

    popFront(overrides?: Overrides): Promise<ContractTransaction>;

    "popFront()"(overrides?: Overrides): Promise<ContractTransaction>;

    pushBack(
      _operation: {
        canonicalTxHash: BytesLike;
        expirationTimestamp: BigNumberish;
        layer2Tip: BigNumberish;
      },
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "pushBack((bytes32,uint64,uint192))"(
      _operation: {
        canonicalTxHash: BytesLike;
        expirationTimestamp: BigNumberish;
        layer2Tip: BigNumberish;
      },
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  front(
    overrides?: CallOverrides
  ): Promise<{
    canonicalTxHash: string;
    expirationTimestamp: BigNumber;
    layer2Tip: BigNumber;
    0: string;
    1: BigNumber;
    2: BigNumber;
  }>;

  "front()"(
    overrides?: CallOverrides
  ): Promise<{
    canonicalTxHash: string;
    expirationTimestamp: BigNumber;
    layer2Tip: BigNumber;
    0: string;
    1: BigNumber;
    2: BigNumber;
  }>;

  getFirstUnprocessedPriorityTx(overrides?: CallOverrides): Promise<BigNumber>;

  "getFirstUnprocessedPriorityTx()"(
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getSize(overrides?: CallOverrides): Promise<BigNumber>;

  "getSize()"(overrides?: CallOverrides): Promise<BigNumber>;

  getTotalPriorityTxs(overrides?: CallOverrides): Promise<BigNumber>;

  "getTotalPriorityTxs()"(overrides?: CallOverrides): Promise<BigNumber>;

  isEmpty(overrides?: CallOverrides): Promise<boolean>;

  "isEmpty()"(overrides?: CallOverrides): Promise<boolean>;

  popFront(overrides?: Overrides): Promise<ContractTransaction>;

  "popFront()"(overrides?: Overrides): Promise<ContractTransaction>;

  pushBack(
    _operation: {
      canonicalTxHash: BytesLike;
      expirationTimestamp: BigNumberish;
      layer2Tip: BigNumberish;
    },
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "pushBack((bytes32,uint64,uint192))"(
    _operation: {
      canonicalTxHash: BytesLike;
      expirationTimestamp: BigNumberish;
      layer2Tip: BigNumberish;
    },
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    front(
      overrides?: CallOverrides
    ): Promise<{
      canonicalTxHash: string;
      expirationTimestamp: BigNumber;
      layer2Tip: BigNumber;
      0: string;
      1: BigNumber;
      2: BigNumber;
    }>;

    "front()"(
      overrides?: CallOverrides
    ): Promise<{
      canonicalTxHash: string;
      expirationTimestamp: BigNumber;
      layer2Tip: BigNumber;
      0: string;
      1: BigNumber;
      2: BigNumber;
    }>;

    getFirstUnprocessedPriorityTx(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getFirstUnprocessedPriorityTx()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSize(overrides?: CallOverrides): Promise<BigNumber>;

    "getSize()"(overrides?: CallOverrides): Promise<BigNumber>;

    getTotalPriorityTxs(overrides?: CallOverrides): Promise<BigNumber>;

    "getTotalPriorityTxs()"(overrides?: CallOverrides): Promise<BigNumber>;

    isEmpty(overrides?: CallOverrides): Promise<boolean>;

    "isEmpty()"(overrides?: CallOverrides): Promise<boolean>;

    popFront(
      overrides?: CallOverrides
    ): Promise<{
      canonicalTxHash: string;
      expirationTimestamp: BigNumber;
      layer2Tip: BigNumber;
      0: string;
      1: BigNumber;
      2: BigNumber;
    }>;

    "popFront()"(
      overrides?: CallOverrides
    ): Promise<{
      canonicalTxHash: string;
      expirationTimestamp: BigNumber;
      layer2Tip: BigNumber;
      0: string;
      1: BigNumber;
      2: BigNumber;
    }>;

    pushBack(
      _operation: {
        canonicalTxHash: BytesLike;
        expirationTimestamp: BigNumberish;
        layer2Tip: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<void>;

    "pushBack((bytes32,uint64,uint192))"(
      _operation: {
        canonicalTxHash: BytesLike;
        expirationTimestamp: BigNumberish;
        layer2Tip: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    front(overrides?: CallOverrides): Promise<BigNumber>;

    "front()"(overrides?: CallOverrides): Promise<BigNumber>;

    getFirstUnprocessedPriorityTx(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getFirstUnprocessedPriorityTx()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSize(overrides?: CallOverrides): Promise<BigNumber>;

    "getSize()"(overrides?: CallOverrides): Promise<BigNumber>;

    getTotalPriorityTxs(overrides?: CallOverrides): Promise<BigNumber>;

    "getTotalPriorityTxs()"(overrides?: CallOverrides): Promise<BigNumber>;

    isEmpty(overrides?: CallOverrides): Promise<BigNumber>;

    "isEmpty()"(overrides?: CallOverrides): Promise<BigNumber>;

    popFront(overrides?: Overrides): Promise<BigNumber>;

    "popFront()"(overrides?: Overrides): Promise<BigNumber>;

    pushBack(
      _operation: {
        canonicalTxHash: BytesLike;
        expirationTimestamp: BigNumberish;
        layer2Tip: BigNumberish;
      },
      overrides?: Overrides
    ): Promise<BigNumber>;

    "pushBack((bytes32,uint64,uint192))"(
      _operation: {
        canonicalTxHash: BytesLike;
        expirationTimestamp: BigNumberish;
        layer2Tip: BigNumberish;
      },
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    front(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "front()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getFirstUnprocessedPriorityTx(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getFirstUnprocessedPriorityTx()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSize(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getSize()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getTotalPriorityTxs(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getTotalPriorityTxs()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isEmpty(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "isEmpty()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    popFront(overrides?: Overrides): Promise<PopulatedTransaction>;

    "popFront()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    pushBack(
      _operation: {
        canonicalTxHash: BytesLike;
        expirationTimestamp: BigNumberish;
        layer2Tip: BigNumberish;
      },
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "pushBack((bytes32,uint64,uint192))"(
      _operation: {
        canonicalTxHash: BytesLike;
        expirationTimestamp: BigNumberish;
        layer2Tip: BigNumberish;
      },
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
