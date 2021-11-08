import React from 'react';
import PropTypes from 'prop-types';
import styles from './current-apprentices.module.scss';
import Apprentice, { apprenticePropTypes } from '../apprentice/apprentice';

export const CurrentApprentices = ({ currentApprenticeClass: { currentApprentices, version } }) => (
  <section className={styles['current-apprentices']}>
    <div className={styles['current-apprentices__content']}>
      <div className={styles['current-apprentices__header']}>
        <h2>
          Current Apprentices
          <span className={styles['current-apprentices__version']}>
            {' '}
            v
            {version}
          </span>
        </h2>
      </div>
      <div className={styles['card-container']}>
        { currentApprentices.map((apprentice) => {
          const { image, links, name } = apprentice;
          return (
            <div className={styles['card-container__card']} key={name}>
              <Apprentice image={image} links={links} name={name} />
            </div>
          );
        }) }
      </div>
    </div>
  </section>
);

export const currentApprenticeClassPropTypes = PropTypes.shape({
  currentApprenticeClass: PropTypes.shape({
    version: PropTypes.string,
    currentApprentices: PropTypes.arrayOf(PropTypes.shape(apprenticePropTypes)),
  }),
});

CurrentApprentices.propTypes = {
  currentApprenticeClass: PropTypes.shape({
    version: PropTypes.string,
    currentApprentices: PropTypes.arrayOf(PropTypes.shape(apprenticePropTypes)),
  }),
};

CurrentApprentices.defaultProps = {
  currentApprenticeClass: {
    version: '',
    currentApprentices: [],
  },
};
