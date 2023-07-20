'use client'
import type { AppProps } from 'next/app';
import Search from './components/search'
import Navbar from './components/navbar'
import { useState } from 'react';

import Layout from './layout';

export default function App({ Component, pageProps }: AppProps) {
  const [services, setservices] = useState();
  console.log(services)
    return (
      <Layout {...pageProps}>
        <Navbar  {...pageProps}/>
        <Search {...pageProps} onChange={setservices} />
      </Layout>
    )
}