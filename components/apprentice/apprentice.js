/* eslint-disable @next/next/no-img-element */
/* Rule above is ignored because next Image component requires width and height props */

import React from 'react'
import SocialLinks from '../social-links/social-links';
import PropTypes from 'prop-types';
import styles from './apprentice.module.scss';
import { linksPropTypes } from '../social-links/social-links';

const Apprentice = ({ image, name, links=[] }) => {
    return (
      <article className={styles.container}>
        <h2 className={styles.container__heading}>{ name }</h2>
        <img className={styles.container__image} src={ image } alt={ name } />
        <div className={styles.container__links}>
          <SocialLinks links={ links } />
        </div>
      </article>
    );
}

Apprentice.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  links: linksPropTypes,
}

export default Apprentice;
