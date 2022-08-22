import React from 'react';
import Head from 'next/head';
import styles from './index.module.scss';
import ApplyHero from '../../components/apply-hero/apply-hero';
import SubscribeCTA from '../../components/subscribe-cta/subscribe-cta';
import Footer from '../../components/footer/footer';

const ApplyPage = () => (
  <div className={styles.container}>
    <Head>
      <title>Become a Sparkbox Apprentice</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <ApplyHero />

    <main>
      <SubscribeCTA />
    </main>

    <Footer />
  </div>
);

export default ApplyPage;
