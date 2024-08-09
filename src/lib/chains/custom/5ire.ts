/* eslint-disable unicorn/numeric-separators-style */
import { defineChain } from 'viem';

export const _5ire = defineChain({
  id: 995,
  name: '5ire Chain',
  nativeCurrency: {
    decimals: 18,
    name: '5IRE',
    symbol: '5IRE'
  },
  rpcUrls: {
    default: {
      http: ['https://rpc.5ire.network']
    }
  },
  blockExplorers: {
    default: { name: '5ire Chain Explorer', url: 'https://5irescan.io/' }
  }
});
