import type { AppProps } from "next/app";
import { globalStyles } from "@/styles/globalStyles";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1,  maximum-scale=1, user-scalable=0, viewport-fit=cover"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
