import React from 'react';
import Head from 'next/head';
import styles from './index.module.scss';
import ApplyHero from '../../components/apply-hero/apply-hero';
import LearnMore from '../../components/learn-more/learn-more';
import SubscribeCTA from '../../components/subscribe-cta/subscribe-cta';
import Footer from '../../components/footer/footer';

const ApplyPage = () => (
  <div className={styles.container}>
    <Head>
      <title>Sparkbox Apprentices</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <ApplyHero />

    <main>
      <LearnMore />
      <SubscribeCTA />
    </main>

    <Footer />
  </div>
);

export default ApplyPage;
