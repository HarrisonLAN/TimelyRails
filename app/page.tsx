'use client'
import type { AppProps } from 'next/app';
import Search from './components/search'
import Navbar from './components/navbar'
import Hero from './components/hero';
import Footer from './components/footer';
import LiveTrains from './components/liveTrains';
import { useState, useEffect} from 'react';

import Layout from './layout';


export default function App({ Component, pageProps }: AppProps) {
  const [services, setservices] = useState();


  useEffect(() => {
    console.log(setservices)
  });
  if (services != null) {
    return (
      <Layout {...pageProps}>
        <Navbar  {...pageProps} />
        <Hero {...pageProps} />
        <Search {...pageProps} onChange={setservices} />
        <LiveTrains {...pageProps} data={services.depBoard} />

        <Footer {...pageProps} />
      </Layout>
    )
  } else {
    return (
      <Layout {...pageProps}>
        <Navbar  {...pageProps} />
        <Hero {...pageProps} />
        <Search {...pageProps} onChange={setservices} />
        <Footer {...pageProps} />
      </Layout>
    )
  }
}