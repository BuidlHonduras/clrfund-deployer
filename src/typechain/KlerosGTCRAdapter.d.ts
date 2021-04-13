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

interface KlerosGTCRAdapterInterface extends ethers.utils.Interface {
  functions: {
    "addRecipient(bytes32)": FunctionFragment;
    "controller()": FunctionFragment;
    "getRecipientAddress(uint256,uint256,uint256)": FunctionFragment;
    "maxRecipients()": FunctionFragment;
    "removeRecipient(bytes32)": FunctionFragment;
    "setMaxRecipients(uint256)": FunctionFragment;
    "tcr()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addRecipient",
    values: [BytesLike]
  ): string;
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
    functionFragment: "removeRecipient",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setMaxRecipients",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "tcr", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "addRecipient",
    data: BytesLike
  ): Result;
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
    functionFragment: "removeRecipient",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMaxRecipients",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "tcr", data: BytesLike): Result;

  events: {
    "RecipientAdded(bytes32,bytes,uint256,uint256)": EventFragment;
    "RecipientRemoved(bytes32,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "RecipientAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RecipientRemoved"): EventFragment;
}

export class KlerosGTCRAdapter extends Contract {
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

  interface: KlerosGTCRAdapterInterface;

  functions: {
    addRecipient(
      _tcrItemId: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "addRecipient(bytes32)"(
      _tcrItemId: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

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

    removeRecipient(
      _tcrItemId: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "removeRecipient(bytes32)"(
      _tcrItemId: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setMaxRecipients(
      _maxRecipients: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "setMaxRecipients(uint256)"(
      _maxRecipients: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    tcr(overrides?: CallOverrides): Promise<[string]>;

    "tcr()"(overrides?: CallOverrides): Promise<[string]>;
  };

  addRecipient(
    _tcrItemId: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "addRecipient(bytes32)"(
    _tcrItemId: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

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

  removeRecipient(
    _tcrItemId: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "removeRecipient(bytes32)"(
    _tcrItemId: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setMaxRecipients(
    _maxRecipients: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "setMaxRecipients(uint256)"(
    _maxRecipients: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  tcr(overrides?: CallOverrides): Promise<string>;

  "tcr()"(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    addRecipient(
      _tcrItemId: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "addRecipient(bytes32)"(
      _tcrItemId: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

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

    removeRecipient(
      _tcrItemId: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "removeRecipient(bytes32)"(
      _tcrItemId: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    setMaxRecipients(
      _maxRecipients: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "setMaxRecipients(uint256)"(
      _maxRecipients: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    tcr(overrides?: CallOverrides): Promise<string>;

    "tcr()"(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    RecipientAdded(
      _tcrItemId: BytesLike | null,
      _metadata: null,
      _index: null,
      _timestamp: null
    ): TypedEventFilter<
      [string, string, BigNumber, BigNumber],
      {
        _tcrItemId: string;
        _metadata: string;
        _index: BigNumber;
        _timestamp: BigNumber;
      }
    >;

    RecipientRemoved(
      _tcrItemId: BytesLike | null,
      _timestamp: null
    ): TypedEventFilter<
      [string, BigNumber],
      { _tcrItemId: string; _timestamp: BigNumber }
    >;
  };

  estimateGas: {
    addRecipient(
      _tcrItemId: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "addRecipient(bytes32)"(
      _tcrItemId: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

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

    removeRecipient(
      _tcrItemId: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "removeRecipient(bytes32)"(
      _tcrItemId: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setMaxRecipients(
      _maxRecipients: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "setMaxRecipients(uint256)"(
      _maxRecipients: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    tcr(overrides?: CallOverrides): Promise<BigNumber>;

    "tcr()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    addRecipient(
      _tcrItemId: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "addRecipient(bytes32)"(
      _tcrItemId: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

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

    removeRecipient(
      _tcrItemId: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "removeRecipient(bytes32)"(
      _tcrItemId: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setMaxRecipients(
      _maxRecipients: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "setMaxRecipients(uint256)"(
      _maxRecipients: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    tcr(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "tcr()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}