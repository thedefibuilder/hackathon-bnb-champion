import { useCallback, useEffect, useState } from 'react';

import type { Abi, Address, PublicClient } from 'viem';
import type { TWalletError } from '../errors/wallet-errors';
import type { TChain } from '../types/chain';

import { createPublicClient, http } from 'viem';

import { mapWalletErrorsToMessage } from '../errors/wallet-errors';

export default function useReadContract<R>(targetChain: TChain) {
  const [publicClient, setPublicClient] = useState<PublicClient | null>(null);
  const [errorMessage, setErrorMessage] = useState<TWalletError | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState<R | null>(null);

  useEffect(() => {
    const publicClient = createPublicClient({
      chain: targetChain.network,
      transport: http()
    });
    setPublicClient(publicClient);
  }, [targetChain.network]);

  const readContract = useCallback(
    async (abi: Abi, functionName: string, contractAddress: Address, args?: unknown[]) => {
      if (!publicClient) {
        console.error('Public client not initialized');
        return;
      }

      try {
        setIsLoading(true);
        setErrorMessage(null);
        setResponse(null);

        const readResponse = await publicClient.readContract({
          abi,
          functionName,
          args,
          address: contractAddress
        });

        console.log('READ', functionName, readResponse);

        setIsLoading(false);
        setErrorMessage(null);
        setResponse(readResponse as R);
      } catch (error: unknown) {
        setIsLoading(false);
        const errorMsg = mapWalletErrorsToMessage(error);
        setErrorMessage(errorMsg);
        setResponse(null);

        console.error('ERROR READING CONTRACT', functionName, errorMsg, error);
      }
    },
    [publicClient]
  );

  return {
    publicClient,
    isLoading,
    errorMessage,
    response,
    readContract
  };
}
