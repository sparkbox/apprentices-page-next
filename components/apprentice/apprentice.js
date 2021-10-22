import React from 'react';
import PropTypes from 'prop-types';
import SocialLinks, { linksPropTypes } from '../social-links/social-links';
import styles from './apprentice.module.scss';

const Apprentice = ({ image, name, links }) => (
  <article className={styles.container}>
    <h2 className={styles.container__heading}>{ name }</h2>
    <img className={styles.container__image} src={image} alt={name} />
    <div className={styles.container__links}>
      <SocialLinks links={links} />
    </div>
  </article>
);

Apprentice.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  links: linksPropTypes,
};

Apprentice.defaultProps = {
  links: [],
};

export default Apprentice;
