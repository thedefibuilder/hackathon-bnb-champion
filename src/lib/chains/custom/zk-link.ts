/* eslint-disable unicorn/numeric-separators-style */
import { defineChain } from 'viem';

export const zkLink = defineChain({
  id: 810180,
  name: 'zkLink Nova',
  nativeCurrency: {
    decimals: 18,
    name: 'Ethereum',
    symbol: 'ETH'
  },
  rpcUrls: {
    default: {
      http: ['https://rpc.zklink.io']
    }
  },
  blockExplorers: {
    default: { name: 'zkLink Nova Explorer', url: 'https://explorer.zklink.io/' }
  }
});
