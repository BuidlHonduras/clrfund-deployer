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
  BaseContract,
  ContractTransaction,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface PoseidonT6Interface extends ethers.utils.Interface {
  functions: {
    "poseidon(bytes32[5])": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "poseidon",
    values: [[BytesLike, BytesLike, BytesLike, BytesLike, BytesLike]]
  ): string;

  decodeFunctionResult(functionFragment: "poseidon", data: BytesLike): Result;

  events: {};
}

export class PoseidonT6 extends BaseContract {
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

  interface: PoseidonT6Interface;

  functions: {
    "poseidon(bytes32[5])"(
      input: [BytesLike, BytesLike, BytesLike, BytesLike, BytesLike],
      overrides?: CallOverrides
    ): Promise<[string]>;

    "poseidon(uint256[5])"(
      input: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ],
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  "poseidon(bytes32[5])"(
    input: [BytesLike, BytesLike, BytesLike, BytesLike, BytesLike],
    overrides?: CallOverrides
  ): Promise<string>;

  "poseidon(uint256[5])"(
    input: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ],
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    "poseidon(bytes32[5])"(
      input: [BytesLike, BytesLike, BytesLike, BytesLike, BytesLike],
      overrides?: CallOverrides
    ): Promise<string>;

    "poseidon(uint256[5])"(
      input: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ],
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    "poseidon(bytes32[5])"(
      input: [BytesLike, BytesLike, BytesLike, BytesLike, BytesLike],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "poseidon(uint256[5])"(
      input: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ],
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    "poseidon(bytes32[5])"(
      input: [BytesLike, BytesLike, BytesLike, BytesLike, BytesLike],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "poseidon(uint256[5])"(
      input: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}