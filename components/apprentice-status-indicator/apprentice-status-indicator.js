import React from 'react';
import PropTypes from 'prop-types';
import styles from './apprentice-status-indicator.module.scss';

const ApprenticeStatusIndicator = ({ status }) => {
  if (!status) return null;

  let svgClass;
  if (status === 'current') {
    svgClass = 'current-employee-status';
  }

  if (status === 'previous') {
    svgClass = 'past-employee-status';
  }

  return (
    <svg viewBox="0 0 100 100" className={styles['employee-status']}>
      <polygon
        points="50 15, 100 100, 0 100"
        className={styles[svgClass]}
        data-testid="status-indicator"
      />
    </svg>
  );
};

ApprenticeStatusIndicator.propTypes = {
  status: PropTypes.oneOf(['current', 'previous']),
};

ApprenticeStatusIndicator.defaultProps = {
  status: null,
};

export default ApprenticeStatusIndicator;
