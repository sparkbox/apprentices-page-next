import React from 'react'
import Link from '../link/link';

const SocialLinks = ({ links = []}) => {
    return (
      <>
      { links.map(({ href, text }) => (
        <Link href={ href } key={ href }>{ text }</Link>
      ))}
      </>
    )
};

export default SocialLinks