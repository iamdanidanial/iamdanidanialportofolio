import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Head from 'next/head';

export const Layout = (props) => {
  return (
    <div>
      <Head>
        <title>{props.title}</title>
        <link rel="shortcut icon" href="/logobulat.png" />
      </Head>

      <Header />
      <div>{props.children}</div>
      <Footer />
    </div>
  );
};
