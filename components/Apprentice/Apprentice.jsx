/* eslint-disable @next/next/no-img-element */
/* Rule above is ignored because next Image component requires width and height props */

import React from 'react'
import SocialLinks from '../SocialLinks/SocialLinks';

const Apprentice = ({ image, name, links=[] }) => {
    return (
      <article>
        <h2>{ name }</h2>
        <img src={ image } alt={ name } />
        <SocialLinks links={ links } />
      </article>
    );
}

export default Apprentice;