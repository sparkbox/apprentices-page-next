import React from 'react';
import PropTypes from 'prop-types';
import styles from './previous-apprentices.module.scss';
import PreviousApprenticesGroup from '../previous-apprentices-group/previous-apprentices-group';

const PreviousApprentices = ({ previousApprenticeGroups }) => (
  <section className={styles['previous-apprentices']}>
    <div className={styles['previous-apprentices__header']}>
      <h2>Previous Apprentices</h2>
      <div className={styles['previous-apprentices__legend']}>
        <div className={styles['previous-apprentices__legend-item']}>
          <svg viewBox="0 0 100 100" className={styles['employee-status']}>
            <polygon
              points="50 15, 100 100, 0 100"
              className={styles['current-employee-status']}
            />
          </svg>
          <p>Current Employee</p>
        </div>
        <div className={styles['previous-apprentices__legend-item']}>
          <svg viewBox="0 0 100 100" className={styles['employee-status']}>
            <polygon
              points="50 15, 100 100, 0 100"
              className={styles['past-employee-status']}
            />
          </svg>
          <p>Past Employee</p>
        </div>
      </div>
    </div>
    <div className={styles['previous-apprentices__groups']}>
      {
        previousApprenticeGroups.map(({ version, apprentices }) => (
          <PreviousApprenticesGroup
            className={styles['previous-apprentices__group']}
            key={version}
            version={version}
            apprentices={apprentices}
          />
        ))
      }
    </div>
  </section>
);

export const previousApprenticeGroupsPropTypes = PropTypes.shape({
  version: PropTypes.string.isRequired,
  apprentices: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    status: PropTypes.oneOf(['current', 'previous']),
  })).isRequired,
}).isRequired;

PreviousApprentices.propTypes = {
  previousApprenticeGroups: PropTypes.arrayOf(previousApprenticeGroupsPropTypes).isRequired,
};

export default PreviousApprentices;
