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
  PayableOverrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface IL1BridgeLegacyInterface extends ethers.utils.Interface {
  functions: {
    "deposit(address,address,uint256,uint256,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "deposit",
    values: [string, string, BigNumberish, BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;

  events: {};
}

export class IL1BridgeLegacy extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IL1BridgeLegacyInterface;

  functions: {
    deposit(
      _l2Receiver: string,
      _l1Token: string,
      _amount: BigNumberish,
      _l2TxGasLimit: BigNumberish,
      _l2TxGasPerPubdataByte: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "deposit(address,address,uint256,uint256,uint256)"(
      _l2Receiver: string,
      _l1Token: string,
      _amount: BigNumberish,
      _l2TxGasLimit: BigNumberish,
      _l2TxGasPerPubdataByte: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;
  };

  deposit(
    _l2Receiver: string,
    _l1Token: string,
    _amount: BigNumberish,
    _l2TxGasLimit: BigNumberish,
    _l2TxGasPerPubdataByte: BigNumberish,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "deposit(address,address,uint256,uint256,uint256)"(
    _l2Receiver: string,
    _l1Token: string,
    _amount: BigNumberish,
    _l2TxGasLimit: BigNumberish,
    _l2TxGasPerPubdataByte: BigNumberish,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  callStatic: {
    deposit(
      _l2Receiver: string,
      _l1Token: string,
      _amount: BigNumberish,
      _l2TxGasLimit: BigNumberish,
      _l2TxGasPerPubdataByte: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "deposit(address,address,uint256,uint256,uint256)"(
      _l2Receiver: string,
      _l1Token: string,
      _amount: BigNumberish,
      _l2TxGasLimit: BigNumberish,
      _l2TxGasPerPubdataByte: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {};

  estimateGas: {
    deposit(
      _l2Receiver: string,
      _l1Token: string,
      _amount: BigNumberish,
      _l2TxGasLimit: BigNumberish,
      _l2TxGasPerPubdataByte: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    "deposit(address,address,uint256,uint256,uint256)"(
      _l2Receiver: string,
      _l1Token: string,
      _amount: BigNumberish,
      _l2TxGasLimit: BigNumberish,
      _l2TxGasPerPubdataByte: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    deposit(
      _l2Receiver: string,
      _l1Token: string,
      _amount: BigNumberish,
      _l2TxGasLimit: BigNumberish,
      _l2TxGasPerPubdataByte: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "deposit(address,address,uint256,uint256,uint256)"(
      _l2Receiver: string,
      _l1Token: string,
      _amount: BigNumberish,
      _l2TxGasLimit: BigNumberish,
      _l2TxGasPerPubdataByte: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;
  };
}
