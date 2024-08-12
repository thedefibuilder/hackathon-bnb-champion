import React from 'react';

import { MenuIcon } from 'lucide-react';
import dynamic from 'next/dynamic';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Skeleton } from '@/components/ui/skeleton';
import { documentationUrl } from '@/lib/constants/urls';

import Nav from './nav';

const UserProfile = dynamic(() => import('@/components/user'), {
  loading: () => <Skeleton className='rounded-medium h-10 w-32' />,
  ssr: false
});
const ExternalAnchor = dynamic(() => import('@/components/external-anchor'), {
  loading: () => <Skeleton className='rounded-medium h-10 w-10' />,
  ssr: false
});

export function SheetMenu() {
  return (
    <Sheet>
      <SheetTrigger className='lg:hidden' asChild>
        <Button className='h-10 w-10' variant='outline' size='icon'>
          <MenuIcon size={20} />
        </Button>
      </SheetTrigger>
      <SheetContent className='flex h-full flex-col px-3 sm:w-72' side='left'>
        <div className='h-4' />
        <div className='sm:pl-1'>
          <UserProfile />
        </div>
        <div className='flex w-full'>
          <Nav isMobile />
        </div>
        <div className='mt-auto w-full'>
          <Button variant='secondary' className='w-full'>
            <ExternalAnchor href={documentationUrl}>Docs</ExternalAnchor>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
