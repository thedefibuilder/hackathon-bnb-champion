import { type Address } from "viem";
import { bscTestnet, type Chain } from "wagmi/chains";

export type TChain = {
  name: string;
  logoURL: string;
  network: Chain;
};

export const bnbChainTestnet = {
  name: "Binance Smart Chain Testnet",
  logoURL: "/bsc-testnet.png",
  network: bscTestnet,
};
