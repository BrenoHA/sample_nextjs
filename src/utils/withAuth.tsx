// High Order Component

import { ElementType, useEffect } from 'react';
import { useRouter } from 'next/router';
import Cookie from 'js-cookie';

const withAuth = (WrappedComponent: ElementType) => {
  const Wrapper = (props: unknown) => {
    const router = useRouter();

    useEffect(() => {
      const token = Cookie.get('token');

      if (!token) {
        router.replace('/login');
      }
    }, []);

    return <WrappedComponent {...props} />;
  };
  return Wrapper;
};

export default withAuth;
