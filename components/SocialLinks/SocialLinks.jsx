import React from 'react'
import Link from '../link/link';
import PropTypes from 'prop-types';
import styles from './SocialLinks.module.scss';

const SocialLinks = ({ links = []}) => {
    return (
      <>
      { links.map(({ href, text }) => (
        <div className={styles.container} key={ href }>
          <Link href={ href } >{ text }</Link>
          <svg width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M0.5 3.07343L0.5 8.5L1.26923 8.5L1.26923 3.07343L8.31903 3.07343C7.95887 3.47125 7.57203 4.06799 7.15851 4.86364L7.85883 4.86364C8.6992 3.94367 9.57959 3.27234 10.5 2.84965L10.5 2.51399C9.57959 2.07887 8.6992 1.40754 7.85883 0.500001L7.15852 0.500001C7.57203 1.29565 7.95887 1.89239 8.31903 2.29021L0.5 2.29021L0.5 2.68182L0.5 3.07343Z" fill="white"/>
          </svg>
        </div>
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
