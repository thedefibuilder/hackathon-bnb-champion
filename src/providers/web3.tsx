"use client";

import React from "react";

import type { PropsWithChildren } from "react";

import {
  getDefaultConfig,
  getDefaultWallets,
  RainbowKitProvider as Web3RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { ledgerWallet, trustWallet } from "@rainbow-me/rainbowkit/wallets";
import { WagmiProvider as Web3WagmiProvider } from "wagmi";
import { type Chain } from "wagmi/chains";

import { chains } from "@/lib/chains";
import { env } from "@/env";

const { wallets: defaultWallets } = getDefaultWallets();

const wagmiChains: [Chain, ...Chain[]] = chains.map(
  (chain) => chain.network,
) as [Chain, ...Chain[]];

const wagmiConfig = getDefaultConfig({
  appName: "DeFi Builder App",
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  projectId: env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID,
  wallets: [
    ...defaultWallets,
    {
      groupName: "More",
      wallets: [trustWallet, ledgerWallet],
    },
  ],
  chains: wagmiChains,
  ssr: true,
});

type TWeb3Provider = PropsWithChildren;

export function WagmiProvider({ children }: TWeb3Provider) {
  return <Web3WagmiProvider config={wagmiConfig}>{children}</Web3WagmiProvider>;
}

export function RainbowKitProvider({ children }: TWeb3Provider) {
  return <Web3RainbowKitProvider>{children}</Web3RainbowKitProvider>;
}
