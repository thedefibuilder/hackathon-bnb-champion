import { useCallback, useEffect, useState } from "react";

import type { TChain } from "../types/chain";

import { greenPressHubAddress, greePressHubAbi } from "../greenpress-hub";
import {
  createPublicClient,
  createWalletClient,
  custom,
  http,
  PublicClient,
  WalletClient,
} from "viem";
import { useAccount, useSwitchChain } from "wagmi";
import { useToast } from "@/components/ui/use-toast";
import { ToastActionElement } from "@/components/ui/toast";

export default function useBuyTemplate(
  targetChain: TChain,
  templateId: string,
) {
  const { address, chainId } = useAccount();
  const { switchChainAsync } = useSwitchChain();

  const { toast } = useToast();

  const [publicClient, setPublicClient] = useState<PublicClient | null>(null);
  const [walletClient, setWalletClient] = useState<WalletClient | null>(null);

  const [templatePrice, setTemplatePrice] = useState<bigint | null>(null);
  const [relayFee, setRelayFee] = useState<bigint | null>(null);
  const [groupId, setGroupId] = useState<bigint | null>(null);
  const [txHash, setTxHash] = useState<string | null>(null);

  useEffect(() => {
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
  }, [targetChain.network]);

  async function fetchAllData() {
    if (!publicClient) {
      console.error("Public client not initialized");
      return;
    }

    const relayFee = await publicClient.readContract({
      abi: greePressHubAbi,
      functionName: "getRelayFee",
      address: greenPressHubAddress,
    });

    const templatePrice = await publicClient.readContract({
      abi: greePressHubAbi,
      functionName: "getTemplatePrice",
      address: greenPressHubAddress,
      args: [templateId],
    });

    const groupId = await publicClient.readContract({
      abi: greePressHubAbi,
      functionName: "getTemplateId",
      address: greenPressHubAddress,
      args: [templateId],
    });

    setTemplatePrice(templatePrice);
    setRelayFee(relayFee);
    setGroupId(groupId);
  }

  useEffect(() => {
    fetchAllData();
  }, [publicClient]);

  const buyTemplate = useCallback(async () => {
    if (!walletClient || !address || !templatePrice || !relayFee || !groupId) {
      console.error("Missing data to buy template", {
        walletClient,
        templatePrice,
        relayFee,
        groupId,
      });
      return;
    }

    if (chainId !== targetChain.network.id) {
      await switchChainAsync({ chainId: targetChain.network.id });
    }

    const hash = await walletClient.writeContract({
      abi: greePressHubAbi,
      address: greenPressHubAddress,
      functionName: "buyTemplate",
      args: [groupId],
      value: templatePrice + relayFee,
      chain: targetChain.network,
      account: address,
    });

    setTxHash(hash);
  }, [walletClient, templatePrice, relayFee, groupId]);

  return { buyTemplate, txHash };
}
