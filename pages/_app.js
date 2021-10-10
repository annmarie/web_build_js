import Head from 'next/head';
import 'styles/globals.scss';
import HeaderComponent from 'components/header-component';
import FooterComponent from 'components/footer-component';

function TheApp({ Component, pageProps }) {

  return (
    <>
      <Head>
        <title>{pageProps.title}</title>
      </Head>
      <div className="main">
        <HeaderComponent {...pageProps} />
        <Component {...pageProps} />
        <FooterComponent {...pageProps} />
      </div>
    </>
  );
}

export default TheApp;
