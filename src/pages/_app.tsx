import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import 'nprogress/nprogress.css';
import '../styles/globals.css';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
