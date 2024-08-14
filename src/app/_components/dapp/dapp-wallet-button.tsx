"use client";

import React, { useEffect, useRef } from "react";

import {
  useAccountModal,
  useChainModal,
  useConnectModal,
} from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";

import { Button } from "@/components/ui/button";
import { COLORS } from "@/lib/dapp-config";

import { type TTokenProps } from "./token";

export default function DappWalletButton({ colors }: TTokenProps) {
  const { isConnecting, isConnected, chain } = useAccount();

  const { openConnectModal } = useConnectModal();
  const { openAccountModal } = useAccountModal();
  const { openChainModal } = useChainModal();

  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;
  }, []);

  if (!isConnected) {
    return (
      <Button
        className="mb-0 w-full"
        style={{
          backgroundColor: colors?.primary,
        }}
        onClick={async () => {
          openConnectModal?.();
        }}
        disabled={isConnecting}
        type="button"
      >
        {isConnecting ? "Connecting..." : "Connect your wallet"}
      </Button>
    );
  }

  if (isConnected && !chain) {
    return (
      <Button
        className="w-full"
        style={{
          backgroundColor: colors?.primary,
        }}
        onClick={openChainModal}
        type="button"
      >
        Wrong network
      </Button>
    );
  }

  return (
    <div className="flex w-full max-w-5xl flex-col items-center justify-between">
      <Button
        className="mb-0 w-full"
        style={{
          background: colors?.primary,
        }}
        onClick={async () => openAccountModal?.()}
        type="button"
      >
        <p>Sign out</p>
      </Button>
    </div>
  );
}
