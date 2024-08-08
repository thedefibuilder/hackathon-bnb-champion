import { defineChain } from 'viem';

export const citreaDevnet = /*#__PURE__*/ defineChain({
  id: 62_298,
  name: 'Citrea Devnet',
  nativeCurrency: {
    decimals: 18,
    name: 'cBTC',
    symbol: 'cBTC'
  },
  rpcUrls: {
    default: { http: ['https://rpc.devnet.citrea.xyz'] }
  },
  blockExplorers: {
    default: {
      name: 'Citrea Explorer',
      url: 'https://explorer.devnet.citrea.xyz/'
    }
  },
  testnet: true
});
