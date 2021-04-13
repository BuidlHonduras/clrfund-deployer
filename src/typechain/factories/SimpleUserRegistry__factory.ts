/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { SimpleUserRegistry } from "../SimpleUserRegistry";

export class SimpleUserRegistry__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SimpleUserRegistry> {
    return super.deploy(overrides || {}) as Promise<SimpleUserRegistry>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): SimpleUserRegistry {
    return super.attach(address) as SimpleUserRegistry;
  }
  connect(signer: Signer): SimpleUserRegistry__factory {
    return super.connect(signer) as SimpleUserRegistry__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SimpleUserRegistry {
    return new Contract(address, _abi, signerOrProvider) as SimpleUserRegistry;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "UserAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "UserRemoved",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "addUser",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "isVerifiedUser",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "removeUser",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50600061001b61006a565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a35061006e565b3390565b6106328061007d6000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c80633da1c0c314610067578063421b2d8b146100a1578063715018a6146100c95780638da5cb5b146100d157806398575188146100f5578063f2fde38b1461011b575b600080fd5b61008d6004803603602081101561007d57600080fd5b50356001600160a01b0316610141565b604080519115158252519081900360200190f35b6100c7600480360360208110156100b757600080fd5b50356001600160a01b031661015f565b005b6100c76102a3565b6100d9610345565b604080516001600160a01b039092168252519081900360200190f35b6100c76004803603602081101561010b57600080fd5b50356001600160a01b0316610354565b6100c76004803603602081101561013157600080fd5b50356001600160a01b031661044c565b6001600160a01b031660009081526001602052604090205460ff1690565b610167610544565b6000546001600160a01b039081169116146101b7576040805162461bcd60e51b815260206004820181905260248201526000805160206105ba833981519152604482015290519081900360640190fd5b6001600160a01b0381166101fc5760405162461bcd60e51b81526004018080602001828103825260228152602001806105986022913960400191505060405180910390fd5b6001600160a01b03811660009081526001602052604090205460ff16156102545760405162461bcd60e51b81526004018080602001828103825260238152602001806105da6023913960400191505060405180910390fd5b6001600160a01b0381166000818152600160208190526040808320805460ff1916909217909155517f19ef9a4877199f89440a26acb26895ec02ed86f2df1aeaa90dc18041b892f71f9190a250565b6102ab610544565b6000546001600160a01b039081169116146102fb576040805162461bcd60e51b815260206004820181905260248201526000805160206105ba833981519152604482015290519081900360640190fd5b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b6000546001600160a01b031690565b61035c610544565b6000546001600160a01b039081169116146103ac576040805162461bcd60e51b815260206004820181905260248201526000805160206105ba833981519152604482015290519081900360640190fd5b6001600160a01b03811660009081526001602052604090205460ff166104035760405162461bcd60e51b815260040180806020018281038252602981526020018061056f6029913960400191505060405180910390fd5b6001600160a01b038116600081815260016020526040808220805460ff19169055517fe9dce8c992623ce791725b21e857e33248d1f190a25b5168313420eebdaae99d9190a250565b610454610544565b6000546001600160a01b039081169116146104a4576040805162461bcd60e51b815260206004820181905260248201526000805160206105ba833981519152604482015290519081900360640190fd5b6001600160a01b0381166104e95760405162461bcd60e51b81526004018080602001828103825260268152602001806105496026913960400191505060405180910390fd5b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b339056fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f20616464726573735573657252656769737472793a2055736572206973206e6f7420696e207468652072656769737472795573657252656769737472793a20557365722061646472657373206973207a65726f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65725573657252656769737472793a205573657220616c7265616479207665726966696564a2646970667358221220f25b56901f14e25f4035abe8f7d287bb5611b0bece65c8052f85b6cd1b1b518064736f6c634300060c0033";