import { defineChain } from 'viem';

export const neox = /*#__PURE__*/ defineChain({
  id: 47_763,
  name: 'NeoX Mainnet',
  nativeCurrency: {
    decimals: 18,
    name: 'GAS',
    symbol: 'GAS'
  },
  rpcUrls: {
    default: { http: ['https://mainnet-1.rpc.banelabs.org'] }
  },
  blockExplorers: {
    default: {
      name: 'NeoX Explorer',
      url: 'https://xexplorer.neo.org'
    }
  }
});
