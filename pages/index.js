import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import styles from './index.module.scss';
import apprenticeData from '../data/apprentices';
import Hero from '../components/hero/hero';
import ApprenticeQualities from '../components/apprentice-qualities/apprentice-qualities';
import CurrentApprentices, { currentApprenticeClassPropTypes } from '../components/current-apprentices/current-apprentices';
import PreviousApprentices, { previousApprenticeGroupsPropTypes } from '../components/previous-apprentices/previous-apprentices';
import CallToAction from '../components/call-to-action/call-to-action';
import Footer from '../components/footer/footer';

export const getStaticProps = async () => ({
  props: {
    apprenticeData: {
      currentApprenticeGroup: apprenticeData.currentApprenticeGroup,
      previousApprenticeGroups: apprenticeData.previousApprenticeGroups,
    },
  },
});

const Home = ({ apprenticeData: { currentApprenticeGroup, previousApprenticeGroups } }) => (
  <div className={styles.container}>
    <Head>
      <title>Sparkbox Apprentices</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Hero />
    <main>
      <ApprenticeQualities />
      <CurrentApprentices currentApprenticeClass={currentApprenticeGroup} />
      <PreviousApprentices previousApprenticeGroups={previousApprenticeGroups} />
      <CallToAction />
    </main>

    <Footer />
  </div>
);

Home.propTypes = {
  apprenticeData: PropTypes.shape({
    currentApprenticeGroup: PropTypes.shape({ currentApprenticeClassPropTypes }).isRequired,
    previousApprenticeGroups: PropTypes.arrayOf(previousApprenticeGroupsPropTypes).isRequired,
  }),
};

Home.defaultProps = {
  apprenticeData: {
    currentApprenticeGroup: {
      version: '',
      currentApprentices: [],
    },
    previousApprenticeGroups: [],
  },
};

export default Home;
