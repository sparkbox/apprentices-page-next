import React from 'react';
import Head from 'next/head';
import styles from './index.module.scss';
import ApprenticeQualities from '../components/apprentice-qualities/apprentice-qualities';
import Hero from '../components/hero/hero';

const Home = () => (
  <div className={styles.container}>
    <Head>
      <title>Sparkbox Apprentices</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <Hero />
      <ApprenticeQualities />
    </main>
  </div>
);

export default Home;
