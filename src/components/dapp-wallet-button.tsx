"use client";

import React, { useEffect, useRef } from "react";

import {
  useAccountModal,
  useChainModal,
  useConnectModal,
} from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";

import { Button } from "src/components/ui/button";
import { COLORS } from "src/lib/dapp-config";

export default function DappWalletButton() {
  const { isConnecting, isConnected, chain, address } = useAccount();

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
      <Button className="w-full" onClick={openChainModal} type="button">
        Wrong network
      </Button>
    );
  }

  return (
    <div className="flex w-full max-w-5xl flex-col items-center justify-between">
      <Button
        className="mb-0 w-full"
        onClick={async () => openAccountModal?.()}
        type="button"
      >
        <p>{address?.slice(0, 10)}...</p>
      </Button>
    </div>
  );
}
