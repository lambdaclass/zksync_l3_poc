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

interface DiamondInitInterface extends ethers.utils.Interface {
  functions: {
    "initialize(tuple)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "initialize",
    values: [
      {
        verifier: string;
        governor: string;
        admin: string;
        genesisBatchHash: BytesLike;
        genesisIndexRepeatedStorageChanges: BigNumberish;
        genesisBatchCommitment: BytesLike;
        allowList: string;
        verifierParams: {
          recursionNodeLevelVkHash: BytesLike;
          recursionLeafLevelVkHash: BytesLike;
          recursionCircuitsSetVksHash: BytesLike;
        };
        zkPorterIsAvailable: boolean;
        l2BootloaderBytecodeHash: BytesLike;
        l2DefaultAccountBytecodeHash: BytesLike;
        priorityTxMaxGasLimit: BigNumberish;
      }
    ]
  ): string;

  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;

  events: {};
}

export class DiamondInit extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: DiamondInitInterface;

  functions: {
    initialize(
      _initalizeData: {
        verifier: string;
        governor: string;
        admin: string;
        genesisBatchHash: BytesLike;
        genesisIndexRepeatedStorageChanges: BigNumberish;
        genesisBatchCommitment: BytesLike;
        allowList: string;
        verifierParams: {
          recursionNodeLevelVkHash: BytesLike;
          recursionLeafLevelVkHash: BytesLike;
          recursionCircuitsSetVksHash: BytesLike;
        };
        zkPorterIsAvailable: boolean;
        l2BootloaderBytecodeHash: BytesLike;
        l2DefaultAccountBytecodeHash: BytesLike;
        priorityTxMaxGasLimit: BigNumberish;
      },
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "initialize((address,address,address,bytes32,uint64,bytes32,address,(bytes32,bytes32,bytes32),bool,bytes32,bytes32,uint256))"(
      _initalizeData: {
        verifier: string;
        governor: string;
        admin: string;
        genesisBatchHash: BytesLike;
        genesisIndexRepeatedStorageChanges: BigNumberish;
        genesisBatchCommitment: BytesLike;
        allowList: string;
        verifierParams: {
          recursionNodeLevelVkHash: BytesLike;
          recursionLeafLevelVkHash: BytesLike;
          recursionCircuitsSetVksHash: BytesLike;
        };
        zkPorterIsAvailable: boolean;
        l2BootloaderBytecodeHash: BytesLike;
        l2DefaultAccountBytecodeHash: BytesLike;
        priorityTxMaxGasLimit: BigNumberish;
      },
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  initialize(
    _initalizeData: {
      verifier: string;
      governor: string;
      admin: string;
      genesisBatchHash: BytesLike;
      genesisIndexRepeatedStorageChanges: BigNumberish;
      genesisBatchCommitment: BytesLike;
      allowList: string;
      verifierParams: {
        recursionNodeLevelVkHash: BytesLike;
        recursionLeafLevelVkHash: BytesLike;
        recursionCircuitsSetVksHash: BytesLike;
      };
      zkPorterIsAvailable: boolean;
      l2BootloaderBytecodeHash: BytesLike;
      l2DefaultAccountBytecodeHash: BytesLike;
      priorityTxMaxGasLimit: BigNumberish;
    },
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "initialize((address,address,address,bytes32,uint64,bytes32,address,(bytes32,bytes32,bytes32),bool,bytes32,bytes32,uint256))"(
    _initalizeData: {
      verifier: string;
      governor: string;
      admin: string;
      genesisBatchHash: BytesLike;
      genesisIndexRepeatedStorageChanges: BigNumberish;
      genesisBatchCommitment: BytesLike;
      allowList: string;
      verifierParams: {
        recursionNodeLevelVkHash: BytesLike;
        recursionLeafLevelVkHash: BytesLike;
        recursionCircuitsSetVksHash: BytesLike;
      };
      zkPorterIsAvailable: boolean;
      l2BootloaderBytecodeHash: BytesLike;
      l2DefaultAccountBytecodeHash: BytesLike;
      priorityTxMaxGasLimit: BigNumberish;
    },
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    initialize(
      _initalizeData: {
        verifier: string;
        governor: string;
        admin: string;
        genesisBatchHash: BytesLike;
        genesisIndexRepeatedStorageChanges: BigNumberish;
        genesisBatchCommitment: BytesLike;
        allowList: string;
        verifierParams: {
          recursionNodeLevelVkHash: BytesLike;
          recursionLeafLevelVkHash: BytesLike;
          recursionCircuitsSetVksHash: BytesLike;
        };
        zkPorterIsAvailable: boolean;
        l2BootloaderBytecodeHash: BytesLike;
        l2DefaultAccountBytecodeHash: BytesLike;
        priorityTxMaxGasLimit: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<string>;

    "initialize((address,address,address,bytes32,uint64,bytes32,address,(bytes32,bytes32,bytes32),bool,bytes32,bytes32,uint256))"(
      _initalizeData: {
        verifier: string;
        governor: string;
        admin: string;
        genesisBatchHash: BytesLike;
        genesisIndexRepeatedStorageChanges: BigNumberish;
        genesisBatchCommitment: BytesLike;
        allowList: string;
        verifierParams: {
          recursionNodeLevelVkHash: BytesLike;
          recursionLeafLevelVkHash: BytesLike;
          recursionCircuitsSetVksHash: BytesLike;
        };
        zkPorterIsAvailable: boolean;
        l2BootloaderBytecodeHash: BytesLike;
        l2DefaultAccountBytecodeHash: BytesLike;
        priorityTxMaxGasLimit: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {};

  estimateGas: {
    initialize(
      _initalizeData: {
        verifier: string;
        governor: string;
        admin: string;
        genesisBatchHash: BytesLike;
        genesisIndexRepeatedStorageChanges: BigNumberish;
        genesisBatchCommitment: BytesLike;
        allowList: string;
        verifierParams: {
          recursionNodeLevelVkHash: BytesLike;
          recursionLeafLevelVkHash: BytesLike;
          recursionCircuitsSetVksHash: BytesLike;
        };
        zkPorterIsAvailable: boolean;
        l2BootloaderBytecodeHash: BytesLike;
        l2DefaultAccountBytecodeHash: BytesLike;
        priorityTxMaxGasLimit: BigNumberish;
      },
      overrides?: Overrides
    ): Promise<BigNumber>;

    "initialize((address,address,address,bytes32,uint64,bytes32,address,(bytes32,bytes32,bytes32),bool,bytes32,bytes32,uint256))"(
      _initalizeData: {
        verifier: string;
        governor: string;
        admin: string;
        genesisBatchHash: BytesLike;
        genesisIndexRepeatedStorageChanges: BigNumberish;
        genesisBatchCommitment: BytesLike;
        allowList: string;
        verifierParams: {
          recursionNodeLevelVkHash: BytesLike;
          recursionLeafLevelVkHash: BytesLike;
          recursionCircuitsSetVksHash: BytesLike;
        };
        zkPorterIsAvailable: boolean;
        l2BootloaderBytecodeHash: BytesLike;
        l2DefaultAccountBytecodeHash: BytesLike;
        priorityTxMaxGasLimit: BigNumberish;
      },
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    initialize(
      _initalizeData: {
        verifier: string;
        governor: string;
        admin: string;
        genesisBatchHash: BytesLike;
        genesisIndexRepeatedStorageChanges: BigNumberish;
        genesisBatchCommitment: BytesLike;
        allowList: string;
        verifierParams: {
          recursionNodeLevelVkHash: BytesLike;
          recursionLeafLevelVkHash: BytesLike;
          recursionCircuitsSetVksHash: BytesLike;
        };
        zkPorterIsAvailable: boolean;
        l2BootloaderBytecodeHash: BytesLike;
        l2DefaultAccountBytecodeHash: BytesLike;
        priorityTxMaxGasLimit: BigNumberish;
      },
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "initialize((address,address,address,bytes32,uint64,bytes32,address,(bytes32,bytes32,bytes32),bool,bytes32,bytes32,uint256))"(
      _initalizeData: {
        verifier: string;
        governor: string;
        admin: string;
        genesisBatchHash: BytesLike;
        genesisIndexRepeatedStorageChanges: BigNumberish;
        genesisBatchCommitment: BytesLike;
        allowList: string;
        verifierParams: {
          recursionNodeLevelVkHash: BytesLike;
          recursionLeafLevelVkHash: BytesLike;
          recursionCircuitsSetVksHash: BytesLike;
        };
        zkPorterIsAvailable: boolean;
        l2BootloaderBytecodeHash: BytesLike;
        l2DefaultAccountBytecodeHash: BytesLike;
        priorityTxMaxGasLimit: BigNumberish;
      },
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
