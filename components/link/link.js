import React from 'react';
import PropTypes from 'prop-types';
import styles from './link.module.scss';

const Link = ({ href, children }) => (
  <a className={styles.link} href={href}>{children}</a>
);

Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
};

export default Link;