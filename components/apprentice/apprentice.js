import React from 'react';
import PropTypes from 'prop-types';
import SocialLinks, { linksPropTypes } from '../social-links/social-links';
import styles from './apprentice.module.scss';

const Apprentice = ({ image, name, links }) => (
  <div className={styles.container}>
    <h3 className={styles.container__heading}>{ name }</h3>
    <img className={styles.container__image} src={image} alt={`a portrait of ${name}`} />
    <div className={styles.container__links}>
      <SocialLinks links={links} name={name} />
    </div>
  </div>
);

export const apprenticePropTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  links: linksPropTypes,
};

Apprentice.propTypes = apprenticePropTypes;

Apprentice.defaultProps = {
  links: [],
};

export default Apprentice;
