'use client'
import type { AppProps } from 'next/app';
import Search from './components/search'
import { useState } from 'react';

import Layout from './layout';

export default function App({ Component, pageProps }: AppProps) {
  const [services, setservices] = useState();
  console.log(services)
  if (services == null) {
    return (
      <Layout {...pageProps}>
        <Search {...pageProps} onChange={setservices} />
      </Layout>
    )
  } else {
    return (
      <Layout {...pageProps}>
      </Layout>
    );
  }
}