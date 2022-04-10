import React from 'react';
import Hero from '../src/section/Hero';
import Service from '../src/section/Service';
import TechStack from '../src/section/TechStack';
import { Layout } from '../src/template/Layout';

export default function index() {
  return (
    <div>
      <Layout title="Dani Danial | Beranda">
        <Hero />
        <Service />
        <TechStack />
      </Layout>
    </div>
  );
}
