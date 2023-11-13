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

interface DefaultUpgradeInterface extends ethers.utils.Interface {
  functions: {
    "upgrade(tuple)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "upgrade",
    values: [
      {
        l2ProtocolUpgradeTx: {
          txType: BigNumberish;
          from: BigNumberish;
          to: BigNumberish;
          gasLimit: BigNumberish;
          gasPerPubdataByteLimit: BigNumberish;
          maxFeePerGas: BigNumberish;
          maxPriorityFeePerGas: BigNumberish;
          paymaster: BigNumberish;
          nonce: BigNumberish;
          value: BigNumberish;
          reserved: [BigNumberish, BigNumberish, BigNumberish, BigNumberish];
          data: BytesLike;
          signature: BytesLike;
          factoryDeps: BigNumberish[];
          paymasterInput: BytesLike;
          reservedDynamic: BytesLike;
        };
        factoryDeps: BytesLike[];
        bootloaderHash: BytesLike;
        defaultAccountHash: BytesLike;
        verifier: string;
        verifierParams: {
          recursionNodeLevelVkHash: BytesLike;
          recursionLeafLevelVkHash: BytesLike;
          recursionCircuitsSetVksHash: BytesLike;
        };
        l1ContractsUpgradeCalldata: BytesLike;
        postUpgradeCalldata: BytesLike;
        upgradeTimestamp: BigNumberish;
        newProtocolVersion: BigNumberish;
        newAllowList: string;
      }
    ]
  ): string;

  decodeFunctionResult(functionFragment: "upgrade", data: BytesLike): Result;

  events: {
    "NewAllowList(address,address)": EventFragment;
    "NewL2BootloaderBytecodeHash(bytes32,bytes32)": EventFragment;
    "NewL2DefaultAccountBytecodeHash(bytes32,bytes32)": EventFragment;
    "NewProtocolVersion(uint256,uint256)": EventFragment;
    "NewVerifier(address,address)": EventFragment;
    "NewVerifierParams(tuple,tuple)": EventFragment;
    "UpgradeComplete(uint256,bytes32,tuple)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "NewAllowList"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "NewL2BootloaderBytecodeHash"
  ): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "NewL2DefaultAccountBytecodeHash"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewProtocolVersion"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewVerifier"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewVerifierParams"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UpgradeComplete"): EventFragment;
}

export class DefaultUpgrade extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: DefaultUpgradeInterface;

  functions: {
    upgrade(
      _proposedUpgrade: {
        l2ProtocolUpgradeTx: {
          txType: BigNumberish;
          from: BigNumberish;
          to: BigNumberish;
          gasLimit: BigNumberish;
          gasPerPubdataByteLimit: BigNumberish;
          maxFeePerGas: BigNumberish;
          maxPriorityFeePerGas: BigNumberish;
          paymaster: BigNumberish;
          nonce: BigNumberish;
          value: BigNumberish;
          reserved: [BigNumberish, BigNumberish, BigNumberish, BigNumberish];
          data: BytesLike;
          signature: BytesLike;
          factoryDeps: BigNumberish[];
          paymasterInput: BytesLike;
          reservedDynamic: BytesLike;
        };
        factoryDeps: BytesLike[];
        bootloaderHash: BytesLike;
        defaultAccountHash: BytesLike;
        verifier: string;
        verifierParams: {
          recursionNodeLevelVkHash: BytesLike;
          recursionLeafLevelVkHash: BytesLike;
          recursionCircuitsSetVksHash: BytesLike;
        };
        l1ContractsUpgradeCalldata: BytesLike;
        postUpgradeCalldata: BytesLike;
        upgradeTimestamp: BigNumberish;
        newProtocolVersion: BigNumberish;
        newAllowList: string;
      },
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "upgrade(((uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256[4],bytes,bytes,uint256[],bytes,bytes),bytes[],bytes32,bytes32,address,(bytes32,bytes32,bytes32),bytes,bytes,uint256,uint256,address))"(
      _proposedUpgrade: {
        l2ProtocolUpgradeTx: {
          txType: BigNumberish;
          from: BigNumberish;
          to: BigNumberish;
          gasLimit: BigNumberish;
          gasPerPubdataByteLimit: BigNumberish;
          maxFeePerGas: BigNumberish;
          maxPriorityFeePerGas: BigNumberish;
          paymaster: BigNumberish;
          nonce: BigNumberish;
          value: BigNumberish;
          reserved: [BigNumberish, BigNumberish, BigNumberish, BigNumberish];
          data: BytesLike;
          signature: BytesLike;
          factoryDeps: BigNumberish[];
          paymasterInput: BytesLike;
          reservedDynamic: BytesLike;
        };
        factoryDeps: BytesLike[];
        bootloaderHash: BytesLike;
        defaultAccountHash: BytesLike;
        verifier: string;
        verifierParams: {
          recursionNodeLevelVkHash: BytesLike;
          recursionLeafLevelVkHash: BytesLike;
          recursionCircuitsSetVksHash: BytesLike;
        };
        l1ContractsUpgradeCalldata: BytesLike;
        postUpgradeCalldata: BytesLike;
        upgradeTimestamp: BigNumberish;
        newProtocolVersion: BigNumberish;
        newAllowList: string;
      },
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  upgrade(
    _proposedUpgrade: {
      l2ProtocolUpgradeTx: {
        txType: BigNumberish;
        from: BigNumberish;
        to: BigNumberish;
        gasLimit: BigNumberish;
        gasPerPubdataByteLimit: BigNumberish;
        maxFeePerGas: BigNumberish;
        maxPriorityFeePerGas: BigNumberish;
        paymaster: BigNumberish;
        nonce: BigNumberish;
        value: BigNumberish;
        reserved: [BigNumberish, BigNumberish, BigNumberish, BigNumberish];
        data: BytesLike;
        signature: BytesLike;
        factoryDeps: BigNumberish[];
        paymasterInput: BytesLike;
        reservedDynamic: BytesLike;
      };
      factoryDeps: BytesLike[];
      bootloaderHash: BytesLike;
      defaultAccountHash: BytesLike;
      verifier: string;
      verifierParams: {
        recursionNodeLevelVkHash: BytesLike;
        recursionLeafLevelVkHash: BytesLike;
        recursionCircuitsSetVksHash: BytesLike;
      };
      l1ContractsUpgradeCalldata: BytesLike;
      postUpgradeCalldata: BytesLike;
      upgradeTimestamp: BigNumberish;
      newProtocolVersion: BigNumberish;
      newAllowList: string;
    },
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "upgrade(((uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256[4],bytes,bytes,uint256[],bytes,bytes),bytes[],bytes32,bytes32,address,(bytes32,bytes32,bytes32),bytes,bytes,uint256,uint256,address))"(
    _proposedUpgrade: {
      l2ProtocolUpgradeTx: {
        txType: BigNumberish;
        from: BigNumberish;
        to: BigNumberish;
        gasLimit: BigNumberish;
        gasPerPubdataByteLimit: BigNumberish;
        maxFeePerGas: BigNumberish;
        maxPriorityFeePerGas: BigNumberish;
        paymaster: BigNumberish;
        nonce: BigNumberish;
        value: BigNumberish;
        reserved: [BigNumberish, BigNumberish, BigNumberish, BigNumberish];
        data: BytesLike;
        signature: BytesLike;
        factoryDeps: BigNumberish[];
        paymasterInput: BytesLike;
        reservedDynamic: BytesLike;
      };
      factoryDeps: BytesLike[];
      bootloaderHash: BytesLike;
      defaultAccountHash: BytesLike;
      verifier: string;
      verifierParams: {
        recursionNodeLevelVkHash: BytesLike;
        recursionLeafLevelVkHash: BytesLike;
        recursionCircuitsSetVksHash: BytesLike;
      };
      l1ContractsUpgradeCalldata: BytesLike;
      postUpgradeCalldata: BytesLike;
      upgradeTimestamp: BigNumberish;
      newProtocolVersion: BigNumberish;
      newAllowList: string;
    },
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    upgrade(
      _proposedUpgrade: {
        l2ProtocolUpgradeTx: {
          txType: BigNumberish;
          from: BigNumberish;
          to: BigNumberish;
          gasLimit: BigNumberish;
          gasPerPubdataByteLimit: BigNumberish;
          maxFeePerGas: BigNumberish;
          maxPriorityFeePerGas: BigNumberish;
          paymaster: BigNumberish;
          nonce: BigNumberish;
          value: BigNumberish;
          reserved: [BigNumberish, BigNumberish, BigNumberish, BigNumberish];
          data: BytesLike;
          signature: BytesLike;
          factoryDeps: BigNumberish[];
          paymasterInput: BytesLike;
          reservedDynamic: BytesLike;
        };
        factoryDeps: BytesLike[];
        bootloaderHash: BytesLike;
        defaultAccountHash: BytesLike;
        verifier: string;
        verifierParams: {
          recursionNodeLevelVkHash: BytesLike;
          recursionLeafLevelVkHash: BytesLike;
          recursionCircuitsSetVksHash: BytesLike;
        };
        l1ContractsUpgradeCalldata: BytesLike;
        postUpgradeCalldata: BytesLike;
        upgradeTimestamp: BigNumberish;
        newProtocolVersion: BigNumberish;
        newAllowList: string;
      },
      overrides?: CallOverrides
    ): Promise<string>;

    "upgrade(((uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256[4],bytes,bytes,uint256[],bytes,bytes),bytes[],bytes32,bytes32,address,(bytes32,bytes32,bytes32),bytes,bytes,uint256,uint256,address))"(
      _proposedUpgrade: {
        l2ProtocolUpgradeTx: {
          txType: BigNumberish;
          from: BigNumberish;
          to: BigNumberish;
          gasLimit: BigNumberish;
          gasPerPubdataByteLimit: BigNumberish;
          maxFeePerGas: BigNumberish;
          maxPriorityFeePerGas: BigNumberish;
          paymaster: BigNumberish;
          nonce: BigNumberish;
          value: BigNumberish;
          reserved: [BigNumberish, BigNumberish, BigNumberish, BigNumberish];
          data: BytesLike;
          signature: BytesLike;
          factoryDeps: BigNumberish[];
          paymasterInput: BytesLike;
          reservedDynamic: BytesLike;
        };
        factoryDeps: BytesLike[];
        bootloaderHash: BytesLike;
        defaultAccountHash: BytesLike;
        verifier: string;
        verifierParams: {
          recursionNodeLevelVkHash: BytesLike;
          recursionLeafLevelVkHash: BytesLike;
          recursionCircuitsSetVksHash: BytesLike;
        };
        l1ContractsUpgradeCalldata: BytesLike;
        postUpgradeCalldata: BytesLike;
        upgradeTimestamp: BigNumberish;
        newProtocolVersion: BigNumberish;
        newAllowList: string;
      },
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {
    NewAllowList(
      oldAllowList: string | null,
      newAllowList: string | null
    ): EventFilter;

    NewL2BootloaderBytecodeHash(
      previousBytecodeHash: BytesLike | null,
      newBytecodeHash: BytesLike | null
    ): EventFilter;

    NewL2DefaultAccountBytecodeHash(
      previousBytecodeHash: BytesLike | null,
      newBytecodeHash: BytesLike | null
    ): EventFilter;

    NewProtocolVersion(
      previousProtocolVersion: BigNumberish | null,
      newProtocolVersion: BigNumberish | null
    ): EventFilter;

    NewVerifier(
      oldVerifier: string | null,
      newVerifier: string | null
    ): EventFilter;

    NewVerifierParams(
      oldVerifierParams: null,
      newVerifierParams: null
    ): EventFilter;

    UpgradeComplete(
      newProtocolVersion: BigNumberish | null,
      l2UpgradeTxHash: BytesLike | null,
      upgrade: null
    ): EventFilter;
  };

  estimateGas: {
    upgrade(
      _proposedUpgrade: {
        l2ProtocolUpgradeTx: {
          txType: BigNumberish;
          from: BigNumberish;
          to: BigNumberish;
          gasLimit: BigNumberish;
          gasPerPubdataByteLimit: BigNumberish;
          maxFeePerGas: BigNumberish;
          maxPriorityFeePerGas: BigNumberish;
          paymaster: BigNumberish;
          nonce: BigNumberish;
          value: BigNumberish;
          reserved: [BigNumberish, BigNumberish, BigNumberish, BigNumberish];
          data: BytesLike;
          signature: BytesLike;
          factoryDeps: BigNumberish[];
          paymasterInput: BytesLike;
          reservedDynamic: BytesLike;
        };
        factoryDeps: BytesLike[];
        bootloaderHash: BytesLike;
        defaultAccountHash: BytesLike;
        verifier: string;
        verifierParams: {
          recursionNodeLevelVkHash: BytesLike;
          recursionLeafLevelVkHash: BytesLike;
          recursionCircuitsSetVksHash: BytesLike;
        };
        l1ContractsUpgradeCalldata: BytesLike;
        postUpgradeCalldata: BytesLike;
        upgradeTimestamp: BigNumberish;
        newProtocolVersion: BigNumberish;
        newAllowList: string;
      },
      overrides?: Overrides
    ): Promise<BigNumber>;

    "upgrade(((uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256[4],bytes,bytes,uint256[],bytes,bytes),bytes[],bytes32,bytes32,address,(bytes32,bytes32,bytes32),bytes,bytes,uint256,uint256,address))"(
      _proposedUpgrade: {
        l2ProtocolUpgradeTx: {
          txType: BigNumberish;
          from: BigNumberish;
          to: BigNumberish;
          gasLimit: BigNumberish;
          gasPerPubdataByteLimit: BigNumberish;
          maxFeePerGas: BigNumberish;
          maxPriorityFeePerGas: BigNumberish;
          paymaster: BigNumberish;
          nonce: BigNumberish;
          value: BigNumberish;
          reserved: [BigNumberish, BigNumberish, BigNumberish, BigNumberish];
          data: BytesLike;
          signature: BytesLike;
          factoryDeps: BigNumberish[];
          paymasterInput: BytesLike;
          reservedDynamic: BytesLike;
        };
        factoryDeps: BytesLike[];
        bootloaderHash: BytesLike;
        defaultAccountHash: BytesLike;
        verifier: string;
        verifierParams: {
          recursionNodeLevelVkHash: BytesLike;
          recursionLeafLevelVkHash: BytesLike;
          recursionCircuitsSetVksHash: BytesLike;
        };
        l1ContractsUpgradeCalldata: BytesLike;
        postUpgradeCalldata: BytesLike;
        upgradeTimestamp: BigNumberish;
        newProtocolVersion: BigNumberish;
        newAllowList: string;
      },
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    upgrade(
      _proposedUpgrade: {
        l2ProtocolUpgradeTx: {
          txType: BigNumberish;
          from: BigNumberish;
          to: BigNumberish;
          gasLimit: BigNumberish;
          gasPerPubdataByteLimit: BigNumberish;
          maxFeePerGas: BigNumberish;
          maxPriorityFeePerGas: BigNumberish;
          paymaster: BigNumberish;
          nonce: BigNumberish;
          value: BigNumberish;
          reserved: [BigNumberish, BigNumberish, BigNumberish, BigNumberish];
          data: BytesLike;
          signature: BytesLike;
          factoryDeps: BigNumberish[];
          paymasterInput: BytesLike;
          reservedDynamic: BytesLike;
        };
        factoryDeps: BytesLike[];
        bootloaderHash: BytesLike;
        defaultAccountHash: BytesLike;
        verifier: string;
        verifierParams: {
          recursionNodeLevelVkHash: BytesLike;
          recursionLeafLevelVkHash: BytesLike;
          recursionCircuitsSetVksHash: BytesLike;
        };
        l1ContractsUpgradeCalldata: BytesLike;
        postUpgradeCalldata: BytesLike;
        upgradeTimestamp: BigNumberish;
        newProtocolVersion: BigNumberish;
        newAllowList: string;
      },
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "upgrade(((uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256[4],bytes,bytes,uint256[],bytes,bytes),bytes[],bytes32,bytes32,address,(bytes32,bytes32,bytes32),bytes,bytes,uint256,uint256,address))"(
      _proposedUpgrade: {
        l2ProtocolUpgradeTx: {
          txType: BigNumberish;
          from: BigNumberish;
          to: BigNumberish;
          gasLimit: BigNumberish;
          gasPerPubdataByteLimit: BigNumberish;
          maxFeePerGas: BigNumberish;
          maxPriorityFeePerGas: BigNumberish;
          paymaster: BigNumberish;
          nonce: BigNumberish;
          value: BigNumberish;
          reserved: [BigNumberish, BigNumberish, BigNumberish, BigNumberish];
          data: BytesLike;
          signature: BytesLike;
          factoryDeps: BigNumberish[];
          paymasterInput: BytesLike;
          reservedDynamic: BytesLike;
        };
        factoryDeps: BytesLike[];
        bootloaderHash: BytesLike;
        defaultAccountHash: BytesLike;
        verifier: string;
        verifierParams: {
          recursionNodeLevelVkHash: BytesLike;
          recursionLeafLevelVkHash: BytesLike;
          recursionCircuitsSetVksHash: BytesLike;
        };
        l1ContractsUpgradeCalldata: BytesLike;
        postUpgradeCalldata: BytesLike;
        upgradeTimestamp: BigNumberish;
        newProtocolVersion: BigNumberish;
        newAllowList: string;
      },
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
