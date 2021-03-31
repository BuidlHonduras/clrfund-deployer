import { useMemo } from "react";
import { getFundingFactoryContract, handle, TransactionReceiptOrError } from "./utils";
import { useWeb3Context } from "../Web3Provider";

/**
 * @description ### Returns handler, validator, receipt, and error hooks for FundingFactory SetToken transactions
 * - Example Response [handleSetToken, validator, getReceipt, error]
 *
 *  @returns handleSetToken(_token:address,)
 *  @returns validator(_token:address,)
 *  @returns getReceipt(hash)
 *  @returns error || null
 */
function useSetToken(contractAddress: string) {
  const { library, account, chainId } = useWeb3Context();

  //NOTE: Blackbox sending transaction, dont recalc unless library changes
  const handleSetToken = useMemo(() => {
    if (!library || !account || !chainId) {
      return { send: null, error: Error("failed to get web3 context") };
    }
    const { contract: FundingFactoryContract, error } = getFundingFactoryContract(contractAddress, library, account);

    try {
      if (error || FundingFactoryContract == null)
        throw Error("failed to get FundingFactory Contract at " + contractAddress);

      const sendTransaction = async (_token: string) => {
        //NOTE: Get the estimated gas price for this transaction
        const { data: estimatedGas, error: gasEstimateError } = await handle(
          FundingFactoryContract.estimateGas.setToken(_token)
        );
        if (gasEstimateError != null || estimatedGas == null) {
          throw Error("Failed during gas estimation." + gasEstimateError?.data.message);
        }

        //NOTE: tx object properties will be null except for tx.hash because we use UncheckedJsonRpcSigner
        const { data: txObject } = await handle(FundingFactoryContract.setToken(_token, { gasLimit: estimatedGas }));
        return txObject;
      };
      return { send: sendTransaction, error: null };
    } catch (error) {
      return { send: null, error };
    }
  }, [library, account, chainId, contractAddress]);

  //NOTE: Blackbox argument validation, dont recalc unless library changes
  const validator = useMemo(() => {
    if (!library || !account || !chainId) {
      return { checkArgs: null, error: Error("failed to get web3 context") };
    }
    // TODO: Actual smart contract validations for arguments
    const checkArgs = async (_token: string) => {
      return true;
    };
    return { checkArgs, error: null };
  }, [library, account, chainId]);

  //NOTE: Blackbox fetching tx receipt, dont recalc unless library changes
  const getReceipt = useMemo(() => {
    if (!library || !account || !chainId) {
      return { waitTwoBlocks: null, error: Error("failed to get web3 context") };
    }
    const waitTwoBlocks: TransactionReceiptOrError = async (hash: string) => {
      const { data: receipt, error } = await handle(library.waitForTransaction(hash, 2));
      if (error != null) {
        return { receipt: null, error };
      }
      return { receipt, error };
    };
    return { waitTwoBlocks: waitTwoBlocks, error: null };
  }, [library, account, chainId]);

  //NOTE: Dont recalc unless everything else also changed
  return useMemo(() => {
    const error =
      !library || !account || !chainId || !handleSetToken || !validator || !getReceipt
        ? Error("Missing dependencies, check your web3 provider")
        : null;

    return {
      validator,
      handleSetToken,
      getReceipt,
      error,
    };
  }, [library, account, chainId, getReceipt, handleSetToken, validator]);
}

export default useSetToken;