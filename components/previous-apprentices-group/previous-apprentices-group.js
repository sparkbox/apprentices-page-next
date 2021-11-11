import React from 'react';
import PropTypes from 'prop-types';
import styles from './previous-apprentices-group.module.scss';

const makePreviousApprentice = (apprentice) => {
  let svgStyleClass = '';
  if (apprentice.status === 'current') svgStyleClass = 'current-employee-svg';
  if (apprentice.status === 'previous') svgStyleClass = 'past-employee-svg';

  return (
    <li
      className={styles['previous-apprentices-group__apprentice']}
      data-testid={apprentice.name}
    >
      {apprentice.name}
      <svg id="triangle" viewBox="0 0 100 100" className={styles['employee-svg']}>
        <polygon
          points="50 15, 100 100, 0 100"
          className={styles[svgStyleClass]}
        />
      </svg>
    </li>
  );
};

const PreviousApprenticesGroup = ({ version, statuses }) => (
  <section className={styles['previous-apprentices-group']}>
    <p
      className={styles['previous-apprentices-group__version']}
      data-testid={version}
    >
      {version}
    </p>
    <ul className={styles['previous-apprentices-group__apprentices']}>
      {statuses.map(makePreviousApprentice)}
    </ul>
  </section>
);

PreviousApprenticesGroup.propTypes = {
  version: PropTypes.string.isRequired,
  statuses: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    status: PropTypes.oneOf(['current', 'previous']),
  })).isRequired,
};

export default PreviousApprenticesGroup;
