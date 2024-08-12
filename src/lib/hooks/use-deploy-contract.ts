import { useCallback, useEffect, useState } from "react";

import type {
  Abi,
  Address,
  Hex,
  PublicClient,
  TransactionReceipt,
  WalletClient,
} from "viem";
import type { TChain } from "../types/chain";

import { useConnectModal } from "@rainbow-me/rainbowkit";
import { createPublicClient, createWalletClient, custom, http } from "viem";
import { useAccount, useChainId, useSwitchChain } from "wagmi";

import { useToast } from "@/components/ui/use-toast";

import { mapWalletErrorsToMessage } from "../errors/wallet-errors";

type TWriteContractResponse = {
  address: Address;
  hash: Hex;
  receipt: TransactionReceipt;
};

export default function useDeployContract(targetChain: TChain) {
  const { toast } = useToast();
  const activeChainId = useChainId();
  const { address: walletAddress } = useAccount();
  const { openConnectModal } = useConnectModal();
  const { switchChainAsync } = useSwitchChain();

  const [publicClient, setPublicClient] = useState<PublicClient | null>(null);
  const [walletClient, setWalletClient] = useState<WalletClient | null>(null);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [response, setResponse] = useState<TWriteContractResponse | null>(null);

  useEffect(() => {
    if (window.ethereum && walletAddress) {
      const publicClient = createPublicClient({
        chain: targetChain.network,
        transport: http(),
      });

      const walletClient = createWalletClient({
        account: walletAddress,
        chain: targetChain.network,
        transport: custom(window.ethereum),
      });

      setPublicClient(publicClient);
      setWalletClient(walletClient);
    }
  }, [targetChain.network, walletAddress]);

  const deployContract = useCallback(
    async (abi: Abi, bytecode: Hex, args: unknown[]) => {
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
        setError("Could not detect wallet client.");
        setResponse(null);

        return;
      }

      try {
        setIsLoading(true);
        setError(null);
        setResponse(null);

        if (activeChainId !== targetChain.network.id) {
          await switchChainAsync({
            chainId: targetChain.network.id,
          });
        }

        const hash = await walletClient.deployContract({
          abi,
          bytecode,
          args,
          account: walletAddress,
          chain: targetChain.network,
        });
        const receipt = await publicClient.waitForTransactionReceipt({ hash });
        if (!receipt.contractAddress)
          throw new Error("Contract address not found in receipt");

        setIsLoading(false);
        setError(null);
        setResponse({
          address: receipt.contractAddress,
          hash,
          receipt,
        });
      } catch (error: unknown) {
        setIsLoading(false);
        setError(mapWalletErrorsToMessage(error).message);
        setResponse(null);

        console.error("ERROR DEPLOYING CONTRACT", error);
      }
    },
    [
      publicClient,
      walletClient,
      activeChainId,
      walletAddress,
      targetChain.network,
    ],
  );

  return {
    publicClient,
    walletClient,
    isLoading,
    error,
    response,
    deployContract,
  };
}
