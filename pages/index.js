import React from 'react';
import Head from 'next/head';
import styles from './index.module.scss';
import ApprenticeQualities from '../components/apprentice-qualities/apprentice-qualities';
import Hero from '../components/hero/hero';
import { currentApprenticeClassPropTypes, CurrentApprentices } from '../components/current-apprentices/current-apprentices';

export const getStaticProps = async () => ({
  // Links are not currently official in the currentApprentices data:
  props: {
    currentApprenticeClass: {
      version: '14.0',
      currentApprentices: [
        {
          name: 'Angus Chang',
          image: '/apprentices/Angus.png',
          links: [
            { href: 'personal', text: 'Personal' },
            { href: 'https://www.linkedin.com/', text: 'Linkedin' },
            { href: 'https://www.github.com/', text: 'Github' },
          ],
        },
        {
          name: 'Alice Russel',
          image: '/apprentices/Alice.png',
          links: [
            { href: 'personal', text: 'Personal' },
            { href: 'https://www.linkedin.com/', text: 'Linkedin' },
            { href: 'https://www.github.com/', text: 'Github' },
          ],
        },
      ],
    },
  },
});

const Home = ({ currentApprenticeClass }) => (
  <div className={styles.container}>
    <Head>
      <title>Sparkbox Apprentices</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <Hero />
      <ApprenticeQualities />
      <CurrentApprentices currentApprenticeClass={currentApprenticeClass} />
    </main>
  </div>
);

Home.propTypes = {
  currentApprenticeClass: currentApprenticeClassPropTypes,
};

Home.defaultProps = {
  currentApprenticeClass: {
    version: '',
    currentApprentices: [],
  },
};

export default Home;
