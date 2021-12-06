import React from 'react';
import PropTypes from 'prop-types';
import styles from './previous-apprentices-group.module.scss';
import ApprenticeStatusIndicator from '../apprentice-status-indicator/apprentice-status-indicator';

const makePreviousApprentice = (apprentice) => (
  <li
    className={styles['previous-apprentices-group__apprentice']}
    data-testid={apprentice.name}
    key={apprentice.name}
  >
    {apprentice.name}
    <ApprenticeStatusIndicator status={apprentice.status} />
  </li>
);

const PreviousApprenticesGroup = ({ version, apprentices }) => (
  <section className={styles['previous-apprentices-group']}>
    <h3
      className={styles['previous-apprentices-group__version']}
      aria-label={`Previous apprentices group version ${version}`}
      data-testid={version}
    >
      {version}
    </h3>
    <ul className={styles['previous-apprentices-group__statuses']}>
      {apprentices.map(makePreviousApprentice)}
    </ul>
  </section>
);

PreviousApprenticesGroup.propTypes = {
  version: PropTypes.string.isRequired,
  apprentices: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    status: PropTypes.oneOf(['current', 'previous']),
  })).isRequired,
};

export default PreviousApprenticesGroup;
