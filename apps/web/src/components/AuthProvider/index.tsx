import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

import useIsLoggedIn from '@/hooks/useIsLoggedIn';

const PRIVATE_ROUTES = ['/create-projects'];

interface AuthProvider {
  children: React.ReactNode;
}

function AuthProvider({ children }: AuthProvider) {
  const { isLoggedIn, loading } = useIsLoggedIn();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !isLoggedIn && PRIVATE_ROUTES.includes(router.pathname)) {
      router.replace('/');
    }
  }, [isLoggedIn, loading]);

  return <>{children}</>;
}

export default AuthProvider;
