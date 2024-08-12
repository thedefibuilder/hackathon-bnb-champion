import React from 'react';

import Image from 'next/image';

import { type TTokenProps } from './token';

export default function DappBanner({ colors, fonts }: TTokenProps) {
  return (
    <div
      style={{
        border: `1px solid ${colors?.primary}`,
        borderRadius: '16px',
        background: `${colors?.background}`,
        fontFamily: fonts
      }}
    >
      <div className='p-6 md:p-2'>
        <Image
          src='/image_1.avif'
          alt='dApp Banner'
          width={678}
          height={283}
          className='h-full w-full rounded-[16px]'
        />
      </div>
    </div>
  );
}
