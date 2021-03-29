import PrivateComponent from '@app/components/Login/PrivatePage';
import { GetServerSideProps } from 'next';

const PrivateClientPage = () => {
  return <PrivateComponent />;
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { token } = req.cookies;

  if (!token) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export default PrivateClientPage;
