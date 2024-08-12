'use client';

import React from 'react';

import { formatUnits } from 'viem';
import { useAccount, useBalance, useEnsName } from 'wagmi';

import { COLORS } from '@/lib/dapp-config';

export default function DappWallet() {
  const { address, chain, isConnected } = useAccount();

  const { data } = useBalance({
    address
  });

  const ens = useEnsName({
    address
  });

  return (
    <div>
      {isConnected && (
        <>
          <h1 className='text-md mb-2 mt-4'>My Info:</h1>

          <div>
            <div className='mb-2 flex justify-between'>
              <h3 className='text-sm' style={{ color: COLORS.textSecondary }}>
                Wallet address
              </h3>
              <h3
                className='text-sm font-semibold'
                style={{ wordBreak: 'break-all', textAlign: 'right' }}
              >
                {address ?? '-'}
              </h3>
            </div>
            <div className='mb-2 flex justify-between'>
              <h3 className='text-sm' style={{ color: COLORS.textSecondary }}>
                Network
              </h3>
              <h3 className='text-sm font-semibold'>{chain?.name ?? '-'}</h3>
            </div>
            <div className='mb-2 flex justify-between'>
              <h3 className='text-sm' style={{ color: COLORS.textSecondary }}>
                Balance
              </h3>
              <h3 className='text-sm font-semibold'>
                {data && (
                  <p>
                    {Number(formatUnits(data.value, data.decimals)).toFixed(4)} {data.symbol}
                  </p>
                )}
              </h3>
            </div>
            <div className='mb-2 flex justify-between'>
              <h3 className='text-sm' style={{ color: COLORS.textSecondary }}>
                EnsName
              </h3>
              <h3 className='text-sm font-semibold'>{ens.data ?? '-'}</h3>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
