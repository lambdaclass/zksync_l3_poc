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
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface IBaseInterface extends ethers.utils.Interface {
  functions: {
    "getName()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "getName", values?: undefined): string;

  decodeFunctionResult(functionFragment: "getName", data: BytesLike): Result;

  events: {};
}

export class IBase extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IBaseInterface;

  functions: {
    getName(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "getName()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;
  };

  getName(overrides?: CallOverrides): Promise<string>;

  "getName()"(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    getName(overrides?: CallOverrides): Promise<string>;

    "getName()"(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    getName(overrides?: CallOverrides): Promise<BigNumber>;

    "getName()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    getName(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getName()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
