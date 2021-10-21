/* eslint-disable @next/next/no-img-element */
/* Rule above is ignored because next Image component requires width and height props */

import React from 'react'
import SocialLinks from '../SocialLinks/SocialLinks';
import styles from './Apprentice.module.scss';

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

export default Apprentice;