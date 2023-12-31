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
  PayableOverrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface DiamondUpgradeInit2Interface extends ethers.utils.Interface {
  functions: {
    "finalizeEthWithdrawal(uint256,uint256,uint16,bytes,bytes32[])": FunctionFragment;
    "forceDeploy2(bytes,bytes,bytes[])": FunctionFragment;
    "getName()": FunctionFragment;
    "l2TransactionBaseCost(uint256,uint256,uint256)": FunctionFragment;
    "proveL1ToL2TransactionStatus(bytes32,uint256,uint256,uint16,bytes32[],uint8)": FunctionFragment;
    "proveL2LogInclusion(uint256,uint256,tuple,bytes32[])": FunctionFragment;
    "proveL2MessageInclusion(uint256,uint256,tuple,bytes32[])": FunctionFragment;
    "requestL2Transaction(address,uint256,bytes,uint256,uint256,bytes[],address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "finalizeEthWithdrawal",
    values: [BigNumberish, BigNumberish, BigNumberish, BytesLike, BytesLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "forceDeploy2",
    values: [BytesLike, BytesLike, BytesLike[]]
  ): string;
  encodeFunctionData(functionFragment: "getName", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "l2TransactionBaseCost",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "proveL1ToL2TransactionStatus",
    values: [
      BytesLike,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BytesLike[],
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "proveL2LogInclusion",
    values: [
      BigNumberish,
      BigNumberish,
      {
        l2ShardId: BigNumberish;
        isService: boolean;
        txNumberInBatch: BigNumberish;
        sender: string;
        key: BytesLike;
        value: BytesLike;
      },
      BytesLike[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "proveL2MessageInclusion",
    values: [
      BigNumberish,
      BigNumberish,
      { txNumberInBatch: BigNumberish; sender: string; data: BytesLike },
      BytesLike[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "requestL2Transaction",
    values: [
      string,
      BigNumberish,
      BytesLike,
      BigNumberish,
      BigNumberish,
      BytesLike[],
      string
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "finalizeEthWithdrawal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "forceDeploy2",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getName", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "l2TransactionBaseCost",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "proveL1ToL2TransactionStatus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "proveL2LogInclusion",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "proveL2MessageInclusion",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "requestL2Transaction",
    data: BytesLike
  ): Result;

  events: {
    "EthWithdrawalFinalized(address,uint256)": EventFragment;
    "NewPriorityRequest(uint256,bytes32,uint64,tuple,bytes[])": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "EthWithdrawalFinalized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewPriorityRequest"): EventFragment;
}

export class DiamondUpgradeInit2 extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: DiamondUpgradeInit2Interface;

  functions: {
    finalizeEthWithdrawal(
      _l2BatchNumber: BigNumberish,
      _l2MessageIndex: BigNumberish,
      _l2TxNumberInBatch: BigNumberish,
      _message: BytesLike,
      _merkleProof: BytesLike[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "finalizeEthWithdrawal(uint256,uint256,uint16,bytes,bytes32[])"(
      _l2BatchNumber: BigNumberish,
      _l2MessageIndex: BigNumberish,
      _l2TxNumberInBatch: BigNumberish,
      _message: BytesLike,
      _merkleProof: BytesLike[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    forceDeploy2(
      _upgradeDeployerCalldata: BytesLike,
      _upgradeSystemContractsCalldata: BytesLike,
      _factoryDeps: BytesLike[],
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "forceDeploy2(bytes,bytes,bytes[])"(
      _upgradeDeployerCalldata: BytesLike,
      _upgradeSystemContractsCalldata: BytesLike,
      _factoryDeps: BytesLike[],
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    getName(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "getName()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    l2TransactionBaseCost(
      _gasPrice: BigNumberish,
      _l2GasLimit: BigNumberish,
      _l2GasPerPubdataByteLimit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "l2TransactionBaseCost(uint256,uint256,uint256)"(
      _gasPrice: BigNumberish,
      _l2GasLimit: BigNumberish,
      _l2GasPerPubdataByteLimit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    proveL1ToL2TransactionStatus(
      _l2TxHash: BytesLike,
      _l2BatchNumber: BigNumberish,
      _l2MessageIndex: BigNumberish,
      _l2TxNumberInBatch: BigNumberish,
      _merkleProof: BytesLike[],
      _status: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    "proveL1ToL2TransactionStatus(bytes32,uint256,uint256,uint16,bytes32[],uint8)"(
      _l2TxHash: BytesLike,
      _l2BatchNumber: BigNumberish,
      _l2MessageIndex: BigNumberish,
      _l2TxNumberInBatch: BigNumberish,
      _merkleProof: BytesLike[],
      _status: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    proveL2LogInclusion(
      _batchNumber: BigNumberish,
      _index: BigNumberish,
      _log: {
        l2ShardId: BigNumberish;
        isService: boolean;
        txNumberInBatch: BigNumberish;
        sender: string;
        key: BytesLike;
        value: BytesLike;
      },
      _proof: BytesLike[],
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    "proveL2LogInclusion(uint256,uint256,(uint8,bool,uint16,address,bytes32,bytes32),bytes32[])"(
      _batchNumber: BigNumberish,
      _index: BigNumberish,
      _log: {
        l2ShardId: BigNumberish;
        isService: boolean;
        txNumberInBatch: BigNumberish;
        sender: string;
        key: BytesLike;
        value: BytesLike;
      },
      _proof: BytesLike[],
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    proveL2MessageInclusion(
      _batchNumber: BigNumberish,
      _index: BigNumberish,
      _message: {
        txNumberInBatch: BigNumberish;
        sender: string;
        data: BytesLike;
      },
      _proof: BytesLike[],
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    "proveL2MessageInclusion(uint256,uint256,(uint16,address,bytes),bytes32[])"(
      _batchNumber: BigNumberish,
      _index: BigNumberish,
      _message: {
        txNumberInBatch: BigNumberish;
        sender: string;
        data: BytesLike;
      },
      _proof: BytesLike[],
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    requestL2Transaction(
      _contractL2: string,
      _l2Value: BigNumberish,
      _calldata: BytesLike,
      _l2GasLimit: BigNumberish,
      _l2GasPerPubdataByteLimit: BigNumberish,
      _factoryDeps: BytesLike[],
      _refundRecipient: string,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "requestL2Transaction(address,uint256,bytes,uint256,uint256,bytes[],address)"(
      _contractL2: string,
      _l2Value: BigNumberish,
      _calldata: BytesLike,
      _l2GasLimit: BigNumberish,
      _l2GasPerPubdataByteLimit: BigNumberish,
      _factoryDeps: BytesLike[],
      _refundRecipient: string,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;
  };

  finalizeEthWithdrawal(
    _l2BatchNumber: BigNumberish,
    _l2MessageIndex: BigNumberish,
    _l2TxNumberInBatch: BigNumberish,
    _message: BytesLike,
    _merkleProof: BytesLike[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "finalizeEthWithdrawal(uint256,uint256,uint16,bytes,bytes32[])"(
    _l2BatchNumber: BigNumberish,
    _l2MessageIndex: BigNumberish,
    _l2TxNumberInBatch: BigNumberish,
    _message: BytesLike,
    _merkleProof: BytesLike[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  forceDeploy2(
    _upgradeDeployerCalldata: BytesLike,
    _upgradeSystemContractsCalldata: BytesLike,
    _factoryDeps: BytesLike[],
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "forceDeploy2(bytes,bytes,bytes[])"(
    _upgradeDeployerCalldata: BytesLike,
    _upgradeSystemContractsCalldata: BytesLike,
    _factoryDeps: BytesLike[],
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  getName(overrides?: CallOverrides): Promise<string>;

  "getName()"(overrides?: CallOverrides): Promise<string>;

  l2TransactionBaseCost(
    _gasPrice: BigNumberish,
    _l2GasLimit: BigNumberish,
    _l2GasPerPubdataByteLimit: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "l2TransactionBaseCost(uint256,uint256,uint256)"(
    _gasPrice: BigNumberish,
    _l2GasLimit: BigNumberish,
    _l2GasPerPubdataByteLimit: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  proveL1ToL2TransactionStatus(
    _l2TxHash: BytesLike,
    _l2BatchNumber: BigNumberish,
    _l2MessageIndex: BigNumberish,
    _l2TxNumberInBatch: BigNumberish,
    _merkleProof: BytesLike[],
    _status: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "proveL1ToL2TransactionStatus(bytes32,uint256,uint256,uint16,bytes32[],uint8)"(
    _l2TxHash: BytesLike,
    _l2BatchNumber: BigNumberish,
    _l2MessageIndex: BigNumberish,
    _l2TxNumberInBatch: BigNumberish,
    _merkleProof: BytesLike[],
    _status: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  proveL2LogInclusion(
    _batchNumber: BigNumberish,
    _index: BigNumberish,
    _log: {
      l2ShardId: BigNumberish;
      isService: boolean;
      txNumberInBatch: BigNumberish;
      sender: string;
      key: BytesLike;
      value: BytesLike;
    },
    _proof: BytesLike[],
    overrides?: CallOverrides
  ): Promise<boolean>;

  "proveL2LogInclusion(uint256,uint256,(uint8,bool,uint16,address,bytes32,bytes32),bytes32[])"(
    _batchNumber: BigNumberish,
    _index: BigNumberish,
    _log: {
      l2ShardId: BigNumberish;
      isService: boolean;
      txNumberInBatch: BigNumberish;
      sender: string;
      key: BytesLike;
      value: BytesLike;
    },
    _proof: BytesLike[],
    overrides?: CallOverrides
  ): Promise<boolean>;

  proveL2MessageInclusion(
    _batchNumber: BigNumberish,
    _index: BigNumberish,
    _message: {
      txNumberInBatch: BigNumberish;
      sender: string;
      data: BytesLike;
    },
    _proof: BytesLike[],
    overrides?: CallOverrides
  ): Promise<boolean>;

  "proveL2MessageInclusion(uint256,uint256,(uint16,address,bytes),bytes32[])"(
    _batchNumber: BigNumberish,
    _index: BigNumberish,
    _message: {
      txNumberInBatch: BigNumberish;
      sender: string;
      data: BytesLike;
    },
    _proof: BytesLike[],
    overrides?: CallOverrides
  ): Promise<boolean>;

  requestL2Transaction(
    _contractL2: string,
    _l2Value: BigNumberish,
    _calldata: BytesLike,
    _l2GasLimit: BigNumberish,
    _l2GasPerPubdataByteLimit: BigNumberish,
    _factoryDeps: BytesLike[],
    _refundRecipient: string,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "requestL2Transaction(address,uint256,bytes,uint256,uint256,bytes[],address)"(
    _contractL2: string,
    _l2Value: BigNumberish,
    _calldata: BytesLike,
    _l2GasLimit: BigNumberish,
    _l2GasPerPubdataByteLimit: BigNumberish,
    _factoryDeps: BytesLike[],
    _refundRecipient: string,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  callStatic: {
    finalizeEthWithdrawal(
      _l2BatchNumber: BigNumberish,
      _l2MessageIndex: BigNumberish,
      _l2TxNumberInBatch: BigNumberish,
      _message: BytesLike,
      _merkleProof: BytesLike[],
      overrides?: CallOverrides
    ): Promise<void>;

    "finalizeEthWithdrawal(uint256,uint256,uint16,bytes,bytes32[])"(
      _l2BatchNumber: BigNumberish,
      _l2MessageIndex: BigNumberish,
      _l2TxNumberInBatch: BigNumberish,
      _message: BytesLike,
      _merkleProof: BytesLike[],
      overrides?: CallOverrides
    ): Promise<void>;

    forceDeploy2(
      _upgradeDeployerCalldata: BytesLike,
      _upgradeSystemContractsCalldata: BytesLike,
      _factoryDeps: BytesLike[],
      overrides?: CallOverrides
    ): Promise<string>;

    "forceDeploy2(bytes,bytes,bytes[])"(
      _upgradeDeployerCalldata: BytesLike,
      _upgradeSystemContractsCalldata: BytesLike,
      _factoryDeps: BytesLike[],
      overrides?: CallOverrides
    ): Promise<string>;

    getName(overrides?: CallOverrides): Promise<string>;

    "getName()"(overrides?: CallOverrides): Promise<string>;

    l2TransactionBaseCost(
      _gasPrice: BigNumberish,
      _l2GasLimit: BigNumberish,
      _l2GasPerPubdataByteLimit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "l2TransactionBaseCost(uint256,uint256,uint256)"(
      _gasPrice: BigNumberish,
      _l2GasLimit: BigNumberish,
      _l2GasPerPubdataByteLimit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    proveL1ToL2TransactionStatus(
      _l2TxHash: BytesLike,
      _l2BatchNumber: BigNumberish,
      _l2MessageIndex: BigNumberish,
      _l2TxNumberInBatch: BigNumberish,
      _merkleProof: BytesLike[],
      _status: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "proveL1ToL2TransactionStatus(bytes32,uint256,uint256,uint16,bytes32[],uint8)"(
      _l2TxHash: BytesLike,
      _l2BatchNumber: BigNumberish,
      _l2MessageIndex: BigNumberish,
      _l2TxNumberInBatch: BigNumberish,
      _merkleProof: BytesLike[],
      _status: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    proveL2LogInclusion(
      _batchNumber: BigNumberish,
      _index: BigNumberish,
      _log: {
        l2ShardId: BigNumberish;
        isService: boolean;
        txNumberInBatch: BigNumberish;
        sender: string;
        key: BytesLike;
        value: BytesLike;
      },
      _proof: BytesLike[],
      overrides?: CallOverrides
    ): Promise<boolean>;

    "proveL2LogInclusion(uint256,uint256,(uint8,bool,uint16,address,bytes32,bytes32),bytes32[])"(
      _batchNumber: BigNumberish,
      _index: BigNumberish,
      _log: {
        l2ShardId: BigNumberish;
        isService: boolean;
        txNumberInBatch: BigNumberish;
        sender: string;
        key: BytesLike;
        value: BytesLike;
      },
      _proof: BytesLike[],
      overrides?: CallOverrides
    ): Promise<boolean>;

    proveL2MessageInclusion(
      _batchNumber: BigNumberish,
      _index: BigNumberish,
      _message: {
        txNumberInBatch: BigNumberish;
        sender: string;
        data: BytesLike;
      },
      _proof: BytesLike[],
      overrides?: CallOverrides
    ): Promise<boolean>;

    "proveL2MessageInclusion(uint256,uint256,(uint16,address,bytes),bytes32[])"(
      _batchNumber: BigNumberish,
      _index: BigNumberish,
      _message: {
        txNumberInBatch: BigNumberish;
        sender: string;
        data: BytesLike;
      },
      _proof: BytesLike[],
      overrides?: CallOverrides
    ): Promise<boolean>;

    requestL2Transaction(
      _contractL2: string,
      _l2Value: BigNumberish,
      _calldata: BytesLike,
      _l2GasLimit: BigNumberish,
      _l2GasPerPubdataByteLimit: BigNumberish,
      _factoryDeps: BytesLike[],
      _refundRecipient: string,
      overrides?: CallOverrides
    ): Promise<string>;

    "requestL2Transaction(address,uint256,bytes,uint256,uint256,bytes[],address)"(
      _contractL2: string,
      _l2Value: BigNumberish,
      _calldata: BytesLike,
      _l2GasLimit: BigNumberish,
      _l2GasPerPubdataByteLimit: BigNumberish,
      _factoryDeps: BytesLike[],
      _refundRecipient: string,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {
    EthWithdrawalFinalized(to: string | null, amount: null): EventFilter;

    NewPriorityRequest(
      txId: null,
      txHash: null,
      expirationTimestamp: null,
      transaction: null,
      factoryDeps: null
    ): EventFilter;
  };

  estimateGas: {
    finalizeEthWithdrawal(
      _l2BatchNumber: BigNumberish,
      _l2MessageIndex: BigNumberish,
      _l2TxNumberInBatch: BigNumberish,
      _message: BytesLike,
      _merkleProof: BytesLike[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    "finalizeEthWithdrawal(uint256,uint256,uint16,bytes,bytes32[])"(
      _l2BatchNumber: BigNumberish,
      _l2MessageIndex: BigNumberish,
      _l2TxNumberInBatch: BigNumberish,
      _message: BytesLike,
      _merkleProof: BytesLike[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    forceDeploy2(
      _upgradeDeployerCalldata: BytesLike,
      _upgradeSystemContractsCalldata: BytesLike,
      _factoryDeps: BytesLike[],
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    "forceDeploy2(bytes,bytes,bytes[])"(
      _upgradeDeployerCalldata: BytesLike,
      _upgradeSystemContractsCalldata: BytesLike,
      _factoryDeps: BytesLike[],
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    getName(overrides?: CallOverrides): Promise<BigNumber>;

    "getName()"(overrides?: CallOverrides): Promise<BigNumber>;

    l2TransactionBaseCost(
      _gasPrice: BigNumberish,
      _l2GasLimit: BigNumberish,
      _l2GasPerPubdataByteLimit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "l2TransactionBaseCost(uint256,uint256,uint256)"(
      _gasPrice: BigNumberish,
      _l2GasLimit: BigNumberish,
      _l2GasPerPubdataByteLimit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    proveL1ToL2TransactionStatus(
      _l2TxHash: BytesLike,
      _l2BatchNumber: BigNumberish,
      _l2MessageIndex: BigNumberish,
      _l2TxNumberInBatch: BigNumberish,
      _merkleProof: BytesLike[],
      _status: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "proveL1ToL2TransactionStatus(bytes32,uint256,uint256,uint16,bytes32[],uint8)"(
      _l2TxHash: BytesLike,
      _l2BatchNumber: BigNumberish,
      _l2MessageIndex: BigNumberish,
      _l2TxNumberInBatch: BigNumberish,
      _merkleProof: BytesLike[],
      _status: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    proveL2LogInclusion(
      _batchNumber: BigNumberish,
      _index: BigNumberish,
      _log: {
        l2ShardId: BigNumberish;
        isService: boolean;
        txNumberInBatch: BigNumberish;
        sender: string;
        key: BytesLike;
        value: BytesLike;
      },
      _proof: BytesLike[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "proveL2LogInclusion(uint256,uint256,(uint8,bool,uint16,address,bytes32,bytes32),bytes32[])"(
      _batchNumber: BigNumberish,
      _index: BigNumberish,
      _log: {
        l2ShardId: BigNumberish;
        isService: boolean;
        txNumberInBatch: BigNumberish;
        sender: string;
        key: BytesLike;
        value: BytesLike;
      },
      _proof: BytesLike[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    proveL2MessageInclusion(
      _batchNumber: BigNumberish,
      _index: BigNumberish,
      _message: {
        txNumberInBatch: BigNumberish;
        sender: string;
        data: BytesLike;
      },
      _proof: BytesLike[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "proveL2MessageInclusion(uint256,uint256,(uint16,address,bytes),bytes32[])"(
      _batchNumber: BigNumberish,
      _index: BigNumberish,
      _message: {
        txNumberInBatch: BigNumberish;
        sender: string;
        data: BytesLike;
      },
      _proof: BytesLike[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    requestL2Transaction(
      _contractL2: string,
      _l2Value: BigNumberish,
      _calldata: BytesLike,
      _l2GasLimit: BigNumberish,
      _l2GasPerPubdataByteLimit: BigNumberish,
      _factoryDeps: BytesLike[],
      _refundRecipient: string,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    "requestL2Transaction(address,uint256,bytes,uint256,uint256,bytes[],address)"(
      _contractL2: string,
      _l2Value: BigNumberish,
      _calldata: BytesLike,
      _l2GasLimit: BigNumberish,
      _l2GasPerPubdataByteLimit: BigNumberish,
      _factoryDeps: BytesLike[],
      _refundRecipient: string,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    finalizeEthWithdrawal(
      _l2BatchNumber: BigNumberish,
      _l2MessageIndex: BigNumberish,
      _l2TxNumberInBatch: BigNumberish,
      _message: BytesLike,
      _merkleProof: BytesLike[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "finalizeEthWithdrawal(uint256,uint256,uint16,bytes,bytes32[])"(
      _l2BatchNumber: BigNumberish,
      _l2MessageIndex: BigNumberish,
      _l2TxNumberInBatch: BigNumberish,
      _message: BytesLike,
      _merkleProof: BytesLike[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    forceDeploy2(
      _upgradeDeployerCalldata: BytesLike,
      _upgradeSystemContractsCalldata: BytesLike,
      _factoryDeps: BytesLike[],
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "forceDeploy2(bytes,bytes,bytes[])"(
      _upgradeDeployerCalldata: BytesLike,
      _upgradeSystemContractsCalldata: BytesLike,
      _factoryDeps: BytesLike[],
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    getName(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getName()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    l2TransactionBaseCost(
      _gasPrice: BigNumberish,
      _l2GasLimit: BigNumberish,
      _l2GasPerPubdataByteLimit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "l2TransactionBaseCost(uint256,uint256,uint256)"(
      _gasPrice: BigNumberish,
      _l2GasLimit: BigNumberish,
      _l2GasPerPubdataByteLimit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    proveL1ToL2TransactionStatus(
      _l2TxHash: BytesLike,
      _l2BatchNumber: BigNumberish,
      _l2MessageIndex: BigNumberish,
      _l2TxNumberInBatch: BigNumberish,
      _merkleProof: BytesLike[],
      _status: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "proveL1ToL2TransactionStatus(bytes32,uint256,uint256,uint16,bytes32[],uint8)"(
      _l2TxHash: BytesLike,
      _l2BatchNumber: BigNumberish,
      _l2MessageIndex: BigNumberish,
      _l2TxNumberInBatch: BigNumberish,
      _merkleProof: BytesLike[],
      _status: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    proveL2LogInclusion(
      _batchNumber: BigNumberish,
      _index: BigNumberish,
      _log: {
        l2ShardId: BigNumberish;
        isService: boolean;
        txNumberInBatch: BigNumberish;
        sender: string;
        key: BytesLike;
        value: BytesLike;
      },
      _proof: BytesLike[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "proveL2LogInclusion(uint256,uint256,(uint8,bool,uint16,address,bytes32,bytes32),bytes32[])"(
      _batchNumber: BigNumberish,
      _index: BigNumberish,
      _log: {
        l2ShardId: BigNumberish;
        isService: boolean;
        txNumberInBatch: BigNumberish;
        sender: string;
        key: BytesLike;
        value: BytesLike;
      },
      _proof: BytesLike[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    proveL2MessageInclusion(
      _batchNumber: BigNumberish,
      _index: BigNumberish,
      _message: {
        txNumberInBatch: BigNumberish;
        sender: string;
        data: BytesLike;
      },
      _proof: BytesLike[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "proveL2MessageInclusion(uint256,uint256,(uint16,address,bytes),bytes32[])"(
      _batchNumber: BigNumberish,
      _index: BigNumberish,
      _message: {
        txNumberInBatch: BigNumberish;
        sender: string;
        data: BytesLike;
      },
      _proof: BytesLike[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    requestL2Transaction(
      _contractL2: string,
      _l2Value: BigNumberish,
      _calldata: BytesLike,
      _l2GasLimit: BigNumberish,
      _l2GasPerPubdataByteLimit: BigNumberish,
      _factoryDeps: BytesLike[],
      _refundRecipient: string,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "requestL2Transaction(address,uint256,bytes,uint256,uint256,bytes[],address)"(
      _contractL2: string,
      _l2Value: BigNumberish,
      _calldata: BytesLike,
      _l2GasLimit: BigNumberish,
      _l2GasPerPubdataByteLimit: BigNumberish,
      _factoryDeps: BytesLike[],
      _refundRecipient: string,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;
  };
}
