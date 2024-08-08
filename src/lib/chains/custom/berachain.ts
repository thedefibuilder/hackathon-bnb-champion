import { defineChain } from 'viem';

export const berachainBartio = /*#__PURE__*/ defineChain({
  id: 80_084,
  name: 'Berachain bArtio',
  nativeCurrency: {
    decimals: 18,
    name: 'BERA Token',
    symbol: 'BERA'
  },
  rpcUrls: {
    default: { http: ['https://bartio.rpc.berachain.com/'] }
  },
  blockExplorers: {
    default: {
      name: 'Berachain',
      url: 'https://bartio.beratrail.io/'
    }
  },
  testnet: true
});
