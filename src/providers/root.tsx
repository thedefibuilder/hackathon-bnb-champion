import React from "react";

import type { PropsWithChildren } from "react";
import { TRPCProvider } from "./trpc";
import { RainbowKitProvider, WagmiProvider } from "./web3";
import ThemeProvider from "./theme";

type TRootProvider = PropsWithChildren;

export default function RootProvider({ children }: TRootProvider) {
  return (
    <ThemeProvider>
      <WagmiProvider>
        <TRPCProvider>
          <RainbowKitProvider>{children}</RainbowKitProvider>
        </TRPCProvider>
      </WagmiProvider>
    </ThemeProvider>
  );
}
