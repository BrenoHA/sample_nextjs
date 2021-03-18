import { motion } from 'framer-motion';

import NavBarComponent from '@app/components/NavBar';
import FooterComponent from '@app/components/Footer';

import '@app/styles/bootstrap.theme.scss';
import '@app/styles/global.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBarComponent />
      <motion.div
        initial="pageInitial"
        animate="pageVisible"
        transition={{ duration: 0.5 }}
        variants={{
          pageInitial: {
            opacity: 0,
            scale: 0,
          },
          pageVisible: {
            scale: 1,
            opacity: 1,
          },
        }}
      >
        <Component {...pageProps} />
      </motion.div>
      <FooterComponent />
    </>
  );
}

export default MyApp;
