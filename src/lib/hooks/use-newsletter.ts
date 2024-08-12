import React, { useEffect, useState } from 'react';

import { useSession } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';

import { api } from '@/providers/trpc';

export default function useNewsletter() {
  const { data: session } = useSession();
  const searchParams = useSearchParams();
  const subscribeToNewsletter = searchParams.get('newsletter') === 'true';
  const { mutate: subscribe, data } = api.mail.subscribe.useMutation();
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);

  useEffect(() => {
    if (session?.user.email && subscribeToNewsletter) {
      subscribe();
    }
  }, [session?.user.email, subscribeToNewsletter]);

  useEffect(() => {
    if (data) {
      setIsSubscribed(data);
    }
  }, [data]);

  return { isSubscribed };
}
