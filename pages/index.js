import React from 'react';
import Head from 'next/head';
import styles from './index.module.scss';

const Home = () => (
  <div className={styles.container}>
    <Head>
      <title>Sparkbox Apprentices</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <h1>Home</h1>
    </main>
  </div>
);

export default Home;
