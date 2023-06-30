import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { wrapper } from '../store/store';
import { Layout } from '@tfp/component-library';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to nextjs-training!</title>
      </Head>
      <main className="app">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
    </>
  );
}

export default wrapper.withRedux(CustomApp);
