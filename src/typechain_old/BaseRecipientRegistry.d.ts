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
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface BaseRecipientRegistryInterface extends ethers.utils.Interface {
  functions: {
    "controller()": FunctionFragment;
    "getRecipientAddress(uint256,uint256,uint256)": FunctionFragment;
    "maxRecipients()": FunctionFragment;
    "setMaxRecipients(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "controller",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getRecipientAddress",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "maxRecipients",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setMaxRecipients",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "controller", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getRecipientAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "maxRecipients",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMaxRecipients",
    data: BytesLike
  ): Result;

  events: {};
}

export class BaseRecipientRegistry extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: BaseRecipientRegistryInterface;

  functions: {
    controller(overrides?: CallOverrides): Promise<[string]>;

    "controller()"(overrides?: CallOverrides): Promise<[string]>;

    getRecipientAddress(
      _index: BigNumberish,
      _startTime: BigNumberish,
      _endTime: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "getRecipientAddress(uint256,uint256,uint256)"(
      _index: BigNumberish,
      _startTime: BigNumberish,
      _endTime: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    maxRecipients(overrides?: CallOverrides): Promise<[BigNumber]>;

    "maxRecipients()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    setMaxRecipients(
      _maxRecipients: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "setMaxRecipients(uint256)"(
      _maxRecipients: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  controller(overrides?: CallOverrides): Promise<string>;

  "controller()"(overrides?: CallOverrides): Promise<string>;

  getRecipientAddress(
    _index: BigNumberish,
    _startTime: BigNumberish,
    _endTime: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  "getRecipientAddress(uint256,uint256,uint256)"(
    _index: BigNumberish,
    _startTime: BigNumberish,
    _endTime: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  maxRecipients(overrides?: CallOverrides): Promise<BigNumber>;

  "maxRecipients()"(overrides?: CallOverrides): Promise<BigNumber>;

  setMaxRecipients(
    _maxRecipients: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "setMaxRecipients(uint256)"(
    _maxRecipients: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    controller(overrides?: CallOverrides): Promise<string>;

    "controller()"(overrides?: CallOverrides): Promise<string>;

    getRecipientAddress(
      _index: BigNumberish,
      _startTime: BigNumberish,
      _endTime: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "getRecipientAddress(uint256,uint256,uint256)"(
      _index: BigNumberish,
      _startTime: BigNumberish,
      _endTime: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    maxRecipients(overrides?: CallOverrides): Promise<BigNumber>;

    "maxRecipients()"(overrides?: CallOverrides): Promise<BigNumber>;

    setMaxRecipients(
      _maxRecipients: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "setMaxRecipients(uint256)"(
      _maxRecipients: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    controller(overrides?: CallOverrides): Promise<BigNumber>;

    "controller()"(overrides?: CallOverrides): Promise<BigNumber>;

    getRecipientAddress(
      _index: BigNumberish,
      _startTime: BigNumberish,
      _endTime: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getRecipientAddress(uint256,uint256,uint256)"(
      _index: BigNumberish,
      _startTime: BigNumberish,
      _endTime: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    maxRecipients(overrides?: CallOverrides): Promise<BigNumber>;

    "maxRecipients()"(overrides?: CallOverrides): Promise<BigNumber>;

    setMaxRecipients(
      _maxRecipients: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "setMaxRecipients(uint256)"(
      _maxRecipients: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    controller(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "controller()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getRecipientAddress(
      _index: BigNumberish,
      _startTime: BigNumberish,
      _endTime: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getRecipientAddress(uint256,uint256,uint256)"(
      _index: BigNumberish,
      _startTime: BigNumberish,
      _endTime: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    maxRecipients(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "maxRecipients()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setMaxRecipients(
      _maxRecipients: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "setMaxRecipients(uint256)"(
      _maxRecipients: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
