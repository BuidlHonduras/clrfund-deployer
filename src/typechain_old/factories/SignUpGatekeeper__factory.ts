/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { SignUpGatekeeper } from "../SignUpGatekeeper";

export class SignUpGatekeeper__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SignUpGatekeeper {
    return new Contract(address, _abi, signerOrProvider) as SignUpGatekeeper;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "register",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];