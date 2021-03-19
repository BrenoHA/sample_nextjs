import NavBarComponent from '@app/components/NavBar';
import FooterComponent from '@app/components/Footer';

import '@app/styles/bootstrap.theme.scss';
import '@app/styles/global.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBarComponent />

      <Component {...pageProps} />
      <FooterComponent />
    </>
  );
}

export default MyApp;
