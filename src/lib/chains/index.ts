import type { TChain } from '@/lib/types/chain';
import type { Address } from 'viem';

import {
  arbitrum,
  arbitrumSepolia,
  areonNetwork,
  base,
  baseSepolia,
  blast,
  bsc,
  bscTestnet,
  coreDao,
  cyber,
  degen,
  gnosis,
  gnosisChiado,
  lightlinkPhoenix,
  linea,
  lineaTestnet,
  mainnet,
  mantle,
  optimism,
  polygon,
  polygonMumbai,
  polygonZkEvm,
  scroll,
  scrollSepolia,
  sepolia,
  taraxa,
  taraxaTestnet,
  telos,
  telosTestnet,
  zkSync,
  zkSyncSepoliaTestnet
} from 'viem/chains';

import { _5ire } from './custom/5ire';
import { arthera } from './custom/arthera';
import { berachainBartio } from './custom/berachain';
import { citreaDevnet } from './custom/citrea';
import { neox } from './custom/neox';
import { zkLink } from './custom/zk-link';

const USDC_URL = 'https://s2.coinmarketcap.com/static/img/coins/64x64/3408.png';
const USDT_URL = 'https://s2.coinmarketcap.com/static/img/coins/64x64/21763.png';

const chains: TChain[] = [
  {
    name: 'Areon',
    logoURL:
      'https://s3.coinmarketcap.com/static-gravity/image/a12b852d57c1402c8bbad0f34197471b.png',
    network: areonNetwork,
    paymentCurrencies: []
  },
  {
    name: 'Arbitrum',
    logoURL: 'https://s2.coinmarketcap.com/static/img/coins/64x64/11841.png',
    network: arbitrum,
    paymentCurrencies: [
      {
        name: 'USDC',
        logoURL: USDC_URL,
        address: '0xaf88d065e77c8cC2239327C5EDb3A432268e5831' as Address,
        decimals: 6
      },
      {
        name: 'USDT',
        logoURL: USDT_URL,
        address: '0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9' as Address,
        decimals: 6
      }
    ]
  },
  {
    name: 'Arbitrum Sepolia',
    logoURL: 'https://s2.coinmarketcap.com/static/img/coins/64x64/11841.png',
    network: arbitrumSepolia,
    paymentCurrencies: []
  },
  {
    name: 'BNB',
    logoURL: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png',
    network: bsc,
    paymentCurrencies: [
      {
        name: 'USDC',
        logoURL: USDC_URL,
        address: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d' as Address,
        decimals: 18
      },
      {
        name: 'USDT',
        logoURL: USDT_URL,
        address: '0x55d398326f99059ff775485246999027b3197955' as Address,
        decimals: 18
      }
    ]
  },
  {
    name: 'Linea',
    logoURL:
      'https://s3.coinmarketcap.com/static-gravity/image/203ccaf09aa64c19bc8989db729468a6.jpg',
    network: linea,
    paymentCurrencies: []
  },
  {
    name: 'Polygon',
    logoURL:
      'https://s3.coinmarketcap.com/static-gravity/image/b8db9a2ac5004c1685a39728cdf4e100.png',
    network: polygon,
    paymentCurrencies: [
      {
        name: 'USDC',
        logoURL: USDC_URL,
        address: '0x2791bca1f2de4661ed88a30c99a7a9449aa84174' as Address,
        decimals: 6
      },
      {
        name: 'USDT',
        logoURL: USDT_URL,
        address: '0xc2132d05d31c914a87c6611c10748aeb04b58e8f' as Address,
        decimals: 6
      }
    ]
  },
  {
    name: 'Polygon Mumbai',
    logoURL:
      'https://s3.coinmarketcap.com/static-gravity/image/b8db9a2ac5004c1685a39728cdf4e100.png',
    network: polygonMumbai,
    paymentCurrencies: []
  },
  {
    name: 'Polygon zkEVM',
    logoURL:
      'https://assets-global.website-files.com/6364e65656ab107e465325d2/642235057dbc06788f6c45c1_polygon-zkevm-logo.png',
    network: polygonZkEvm,
    paymentCurrencies: []
  },
  {
    name: 'Base',
    logoURL: 'https://s2.coinmarketcap.com/static/img/coins/64x64/27716.png',
    network: base,
    paymentCurrencies: [
      {
        name: 'USDC',
        logoURL: USDC_URL,
        address: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913' as Address,
        decimals: 6
      }
    ]
  },
  {
    name: 'Base Sepolia',
    logoURL: 'https://s2.coinmarketcap.com/static/img/coins/64x64/27716.png',
    network: baseSepolia,
    paymentCurrencies: []
  },
  {
    name: 'Ethereum',
    logoURL: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png',
    network: mainnet,
    paymentCurrencies: [
      {
        name: 'USDC',
        logoURL: USDC_URL,
        address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48' as Address,
        decimals: 6
      },
      {
        name: 'USDT',
        logoURL: USDT_URL,
        address: '0xdAC17F958D2ee523a2206206994597C13D831ec7' as Address,
        decimals: 6
      }
    ]
  },
  {
    name: 'Ethereum Sepolia',
    logoURL: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png',
    network: sepolia,
    paymentCurrencies:
      // Sepolia testnet is only available in development, uncomment for development.
      [
        // {
        //   name: 'USDT',
        //   logoURL: USDT_URL,
        //   address: '0xaa8e23fb1079ea71e0a56f48a2aa51851d8433d0' as Address,
        //   decimals: 6
        // }
      ]
  },
  {
    name: 'Gnosis',
    logoURL: 'https://pbs.twimg.com/profile_images/1603829076346667022/6J-QZXPB_400x400.jpg',
    network: gnosis,
    paymentCurrencies: []
  },
  {
    name: 'Gnosis Chiado',
    logoURL: 'https://pbs.twimg.com/profile_images/1603829076346667022/6J-QZXPB_400x400.jpg',
    network: gnosisChiado,
    paymentCurrencies: []
  },
  {
    name: 'LightLink',
    logoURL:
      'https://s3.coinmarketcap.com/static-gravity/image/b9b932b4461741e79e417639904bf919.jpeg',
    network: lightlinkPhoenix,
    paymentCurrencies: []
  },
  {
    name: 'Arthera',
    logoURL: 'https://pbs.twimg.com/profile_images/1777451237316722688/wuR1Qjdr_400x400.jpg',
    network: arthera,
    paymentCurrencies: []
  },
  {
    name: 'zkSync',
    logoURL: 'https://s2.coinmarketcap.com/static/img/coins/64x64/24091.png',
    network: zkSync,
    paymentCurrencies: []
  },
  {
    name: 'zkSync Sepolia',
    logoURL: 'https://s2.coinmarketcap.com/static/img/coins/64x64/24091.png',
    network: zkSyncSepoliaTestnet,
    paymentCurrencies: []
  },
  {
    name: 'Core',
    logoURL: 'https://pbs.twimg.com/profile_images/1814265720030568450/3eE-KKKd_400x400.jpg',
    network: coreDao,
    paymentCurrencies: []
  },
  {
    name: 'Cyber',
    logoURL: 'https://pbs.twimg.com/profile_images/1790617734281154560/MqaxhdzZ_400x400.jpg',
    network: cyber,
    paymentCurrencies: []
  },
  {
    name: 'Berachain bArtio',
    logoURL: 'https://pbs.twimg.com/profile_images/1775162753499508736/2XBUzQhl_400x400.jpg',
    network: berachainBartio,
    paymentCurrencies: []
  },
  {
    name: 'Telos',
    logoURL: 'https://pbs.twimg.com/profile_images/1811032842014478337/LFNYCL1s_400x400.png',
    network: telos,
    paymentCurrencies: []
  },
  {
    name: 'Telos Testnet',
    logoURL: 'https://pbs.twimg.com/profile_images/1811032842014478337/LFNYCL1s_400x400.png',
    network: telosTestnet,
    paymentCurrencies: []
  },
  {
    name: 'Optimism',
    logoURL: 'https://pbs.twimg.com/profile_images/1734354549496836096/-laoU9C9_400x400.jpg',
    network: optimism,
    paymentCurrencies: []
  },
  {
    name: 'Optimism Sepolia',
    logoURL: 'https://pbs.twimg.com/profile_images/1734354549496836096/-laoU9C9_400x400.jpg',
    network: optimism,
    paymentCurrencies: []
  },
  {
    name: 'Scroll',
    logoURL: 'https://pbs.twimg.com/profile_images/1696531511519150080/Fq5O0LeN_400x400.jpg',
    network: scroll,
    paymentCurrencies: []
  },
  {
    name: 'Scroll Sepolia',
    logoURL: 'https://pbs.twimg.com/profile_images/1696531511519150080/Fq5O0LeN_400x400.jpg',
    network: scrollSepolia,
    paymentCurrencies: []
  },
  {
    name: 'zkLink Nova',
    logoURL: 'https://pbs.twimg.com/profile_images/1790560996224098305/kI4FEjmn_400x400.png',
    network: zkLink,
    paymentCurrencies: []
  },
  {
    name: 'Degen',
    logoURL: 'https://s2.coinmarketcap.com/static/img/coins/64x64/30096.png',
    network: degen,
    paymentCurrencies: []
  },
  {
    name: 'Blast',
    logoURL: 'https://s2.coinmarketcap.com/static/img/coins/64x64/28480.png',
    network: blast,
    paymentCurrencies: []
  },
  {
    name: 'BNB Testnet',
    logoURL: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png',
    network: bscTestnet,
    paymentCurrencies: []
  },
  {
    name: 'Linea Testnet',
    logoURL:
      'https://s3.coinmarketcap.com/static-gravity/image/203ccaf09aa64c19bc8989db729468a6.jpg',
    network: lineaTestnet,
    paymentCurrencies: []
  },
  {
    name: 'Mantle',
    logoURL: 'https://pbs.twimg.com/profile_images/1597775748580134914/bLhE1aY1_400x400.jpg',
    network: mantle,
    paymentCurrencies: []
  },
  {
    name: 'Citrea Devnet',
    logoURL: 'https://pbs.twimg.com/profile_images/1749704652545728513/AiL1r5pP_400x400.jpg',
    network: citreaDevnet,
    paymentCurrencies: []
  },
  {
    name: 'Taraxa',
    logoURL: 'https://pbs.twimg.com/profile_images/970360245070397440/qv7jbxry_400x400.jpg',
    network: taraxa,
    paymentCurrencies: []
  },
  {
    name: 'Taraxa Testnet',
    logoURL: 'https://pbs.twimg.com/profile_images/970360245070397440/qv7jbxry_400x400.jpg',
    network: taraxaTestnet,
    paymentCurrencies: []
  },
  {
    name: 'NeoX',
    logoURL: '/neox-logo.png',
    network: neox,
    paymentCurrencies: []
  },
  {
    name: '5ire Chain',
    logoURL: 'https://pbs.twimg.com/profile_images/1745156323338301443/5tCj2PYf_400x400.jpg',
    network: _5ire,
    paymentCurrencies: []
  }
].sort((a, b) => a.name.localeCompare(b.name));

const paymentChains = chains.filter((chain) => chain.paymentCurrencies.length > 0) as [
  TChain,
  ...TChain[]
];

const testnetChains = chains.filter((chain) => !!chain.network.testnet);
const mainnetChains = chains.filter((chain) => !chain.network.testnet);

function getChainConfig(chainId: number) {
  return chains.find((chain) => chain.network.id === chainId);
}

export { chains, paymentChains, testnetChains, mainnetChains, getChainConfig };
