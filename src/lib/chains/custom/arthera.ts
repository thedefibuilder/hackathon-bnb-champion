/* eslint-disable unicorn/numeric-separators-style */
import { defineChain } from 'viem';

export const arthera = defineChain({
  id: 10242,
  name: 'Arthera Mainnet',
  nativeCurrency: {
    decimals: 18,
    name: 'Arthera',
    symbol: 'AA'
  },
  rpcUrls: {
    default: {
      http: ['https://rpc.arthera.net']
    }
  },
  blockExplorers: {
    default: { name: 'Arthera Explorer', url: 'https://explorer.arthera.net/' }
  }
});
