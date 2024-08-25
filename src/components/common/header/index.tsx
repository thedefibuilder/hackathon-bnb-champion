"use client";

import React from "react";

import { LogoWithTitle } from "./logo";
import DappWalletButton from "src/components/dapp-wallet-button";

export default function Header() {
  return (
    <header className="fixed z-50 flex h-20 w-full justify-between border-b border-border bg-black p-5">
      <nav className="flex h-full w-9/12 items-center gap-x-5">
        <LogoWithTitle />
      </nav>
      <div className="flex h-full items-center justify-center">
        <DappWalletButton />
      </div>
    </header>
  );
}
