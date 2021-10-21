import React from 'react'
import Link from '../link/link';
import PropTypes from 'prop-types';

const SocialLinks = ({ links = []}) => {
    return (
      <>
      { links.map(({ href, text }) => (
        <Link href={ href } key={ href }>{ text }</Link>
      ))}
      </>
    )
};

SocialLinks.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    href: PropTypes.String,
    text: PropTypes.String,
  })),
};

export default SocialLinks;
