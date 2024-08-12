import type { TChain } from "@/lib/types/chain";
import { Network } from "lucide-react";
import type { Address } from "viem";

import { opBNB, opBNBTestnet, bsc, bscTestnet } from "viem/chains";

const chains: TChain[] = [
  {
    name: "BNB",
    logoURL: "https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png",
    network: bsc,
  },
  {
    name: "BNB Testnet",
    logoURL: "https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png",
    network: bscTestnet,
  },
  {
    name: "opBNB",
    logoURL:
      "https://chainspot.io/api/1.0/image/view?path=497/927/op_bnb1687420235160.png",
    network: opBNB,
  },
  {
    name: "opBNB Testnet",
    logoURL:
      "https://chainspot.io/api/1.0/image/view?path=497/927/op_bnb1687420235160.png",
    network: opBNBTestnet,
  },
].sort((a, b) => a.name.localeCompare(b.name));

const testnetChains = chains.filter((chain) => !!chain.network.testnet);
const mainnetChains = chains.filter((chain) => !chain.network.testnet);

function getChainConfig(chainId: number) {
  return chains.find((chain) => chain.network.id === chainId);
}

export { chains, testnetChains, mainnetChains, getChainConfig };
