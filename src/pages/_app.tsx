import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import { GlobalStyles } from '../utils/GlobalStyles'
import Head from 'next/head'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>멀티 채팅방</title>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,viewport-fit=cover,user-scalable=no"
        />
        <meta name="description" content="웹소켓을 활용한 간단한 멀티 채팅방" />
        <meta name="author" content="devho813 <devho813@gmail.com>" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      </Head>
      {GlobalStyles}
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  )
}

export default App
