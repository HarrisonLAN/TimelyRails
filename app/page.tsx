'use client'
import type { AppProps } from 'next/app';
import Search from './components/search'
import Navbar from './components/navbar'
import Hero from './components/hero';
import Footer from './components/footer';
import LiveTrains from './components/liveTrains';
import { useState, useEffect } from 'react';

import Layout from './layout';


export default function App({ Component, pageProps }: AppProps) {
  const [services, setservices] = useState();
  return (  
    <Layout {...pageProps}>
      <Navbar />
      <Hero />
      <Search onChange={setservices} />
      <LiveTrains data={services} />
      <Footer />
    </Layout>
  )
}