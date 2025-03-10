import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import styles from './index.module.scss';
import apprenticeData from '../data/apprentices';
import Hero from '../components/hero/hero';
import ApprenticeQualities from '../components/apprentice-qualities/apprentice-qualities';
// Turn this back on when we restart the apprenticeship
// import CurrentApprentices, { currentApprenticeClassPropTypes }
// from '../components/current-apprentices/current-apprentices';
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

// const Home = ({ apprenticeData: { currentApprenticeGroup, previousApprenticeGroups } }) => (
const Home = ({ apprenticeData: { previousApprenticeGroups } }) => (
  <div className={styles.container}>
    <Head>
      <title>Sparkbox Apprentices</title>
      <link rel="icon" href="/favicon.ico" />
      <script
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
            var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
            j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
            f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-KQ53HCR');
          `,
        }}
      />
    </Head>
    <noscript
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{
        __html: '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KQ53HCR" height="0" width="0" style="display:none;visibility:hidden"></iframe>',
      }}
    />
    <Hero />

    <main>
      <ApprenticeQualities />
      {/* Turn this back on when we restart the apprenticeship */}
      {/* <CurrentApprentices currentApprenticeClass={currentApprenticeGroup} /> */}
      <PreviousApprentices previousApprenticeGroups={previousApprenticeGroups} />
      <CallToAction />
    </main>

    <Footer />
  </div>
);

Home.propTypes = {
  apprenticeData: PropTypes.shape({
    // currentApprenticeGroup: PropTypes.shape({ currentApprenticeClassPropTypes }).isRequired,
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
