import React from 'react';

import Image from 'next/image';

export default function CustomizeReview() {
  return (
    <Image
      src='/farm-platform.svg'
      alt='customize main'
      width={900}
      height={779}
      className='w-full'
    />
  );
}
