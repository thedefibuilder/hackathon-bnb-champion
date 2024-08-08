import { type Address } from 'viem';
import { type Chain } from 'wagmi/chains';

export type TChain = {
  name: string;
  logoURL: string;
  network: Chain;
  paymentCurrencies: {
    name: string;
    logoURL: string;
    address: Address;
    decimals: number;
  }[];
};
