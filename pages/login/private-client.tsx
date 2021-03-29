import PrivateComponent from '@app/components/Login/PrivatePage';
// import { useEffect } from 'react';
// import Cookie from 'js-cookie';
// import { useRouter } from 'next/router';

import withAuth from '@app/utils/withAuth';

const PrivateClientPage = () => {
  // const router = useRouter();

  // useEffect(() => {
  //   const token = Cookie.get('token');

  //   if (!token) {
  //     router.replace('/login');
  //   }
  // }, []);

  return <PrivateComponent />;
};

export default withAuth(PrivateClientPage);
