import { useCallback, useEffect, useState } from "react";

import type {
  Abi,
  Address,
  Hex,
  PublicClient,
  SimulateContractReturnType,
  TransactionReceipt,
  WalletClient,
} from "viem";
import type { TWalletError } from "../errors/wallet-errors";
import type { TChain } from "../types/chain";

import { useConnectModal } from "@rainbow-me/rainbowkit";
import { createPublicClient, createWalletClient, custom, http } from "viem";
import { useAccount, useChainId, useSwitchChain } from "wagmi";

import { mapWalletErrorsToMessage } from "../errors/wallet-errors";
import { useToast } from "@/components/ui/use-toast";

type TWriteContractResponse = {
  result: unknown;
  hash: Hex;
  receipt: TransactionReceipt;
};

export default function useWriteContract(targetChain: TChain) {
  const { toast } = useToast();
  const { openConnectModal } = useConnectModal();
  const activeChainId = useChainId();
  const { address: walletAddress } = useAccount();
  const { switchChainAsync } = useSwitchChain();

  const [publicClient, setPublicClient] = useState<PublicClient | null>(null);
  const [walletClient, setWalletClient] = useState<WalletClient | null>(null);

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<TWalletError | null>(null);
  const [response, setResponse] = useState<TWriteContractResponse | null>(null);

  useEffect(() => {
    if (window.ethereum) {
      const publicClient = createPublicClient({
        chain: targetChain.network,
        transport: http(),
      });

      const walletClient = createWalletClient({
        chain: targetChain.network,
        transport: custom(window.ethereum),
      });

      setPublicClient(publicClient);
      setWalletClient(walletClient);
    }
  }, [targetChain.network]);

  const writeContract = useCallback(
    async (
      abi: Abi,
      functionName: string,
      arguments_: unknown[],
      contractAddress: Address,
      value = 0n,
    ) => {
      if (!walletAddress) {
        openConnectModal
          ? openConnectModal()
          : toast({
              title: "Connect wallet",
              description: "Please connect your wallet to deploy a contract",
            });
        return;
      }
      if (!publicClient || !walletClient || !activeChainId) {
        setIsLoading(false);
        setErrorMessage({
          message: "Could not detect wallet client.",
          title: "Wallet Error",
        });
        setResponse(null);

        return;
      }

      try {
        setIsLoading(true);
        setErrorMessage(null);
        setResponse(null);

        if (activeChainId !== targetChain.network.id) {
          await switchChainAsync({ chainId: targetChain.network.id });
        }

        const walletAddresses = await walletClient.getAddresses();
        const walletAddress = walletAddresses.at(0);

        const simulation = await publicClient.simulateContract({
          abi,
          functionName,
          args: arguments_,
          address: contractAddress,
          account: walletAddress,
          value,
        });

        const hash = await walletClient.writeContract(simulation.request);

        const receipt = await publicClient.waitForTransactionReceipt({ hash });

        setIsLoading(false);
        setErrorMessage(null);
        setResponse({
          result: simulation.result,
          hash,
          receipt,
        });
      } catch (error: unknown) {
        setIsLoading(false);
        setErrorMessage(mapWalletErrorsToMessage(error));
        setResponse(null);
        console.error("ERROR WRITING CONTRACT", functionName, error);
      }
    },
    [
      publicClient,
      walletClient,
      activeChainId,
      switchChainAsync,
      targetChain.network.id,
    ],
  );

  return {
    publicClient,
    walletClient,
    isLoading,
    errorMessage,
    response,
    writeContract,
  };
}
