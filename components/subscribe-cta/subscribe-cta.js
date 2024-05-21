import React from 'react';
import styles from './subscribe-cta.module.scss';

const SubscribeCTA = () => (
  <footer className={styles['subscribe-cta']}>
    <div className={styles['subscribe-cta__container']}>
      <div className={styles['subscribe-cta__text-container']}>
        <h2>Keep in Touch</h2>
        <p>
          Sign up for our monthly newsletter
          to be notified when applications open,
          or you can check out our careers page
          for all currently available positions.
        </p>
        <div className={styles['subscribe-cta__link-container']}>
          <a href="https://sparkbox.us1.list-manage.com/subscribe/post?u=c2fcafb7ccc2db34e99075bb1&id=2835f91fa5&f_id=00847ae1f0">Newsletter Sign-up</a>
          <a href="https://sparkbox.com/careers">Sparkbox Careers</a>
        </div>
      </div>
      <div aria-hidden className={styles['subscribe-cta__art-container']}>
        <div className={styles['subscribe-cta__grid']}>
          <img src="/apprentices/Theo.png" alt="" />
          <img src="/apprentices/Meg.png" alt="" />
          <img src="/apprentices/Osmond.png" alt="" />
          <div className={styles['subscribe-cta__grid--shape1']}>
            <svg viewBox="0 0 40 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.00133 32.5401L20.2337 2.69278L37.4661 32.5401H3.00133Z" />
            </svg>
          </div>
          <div className={styles['subscribe-cta__grid--shape2']}>
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="19.9315" cy="19.7905" r="18.2325" />
            </svg>
          </div>
          <div className={styles['subscribe-cta__grid--shape3']}>
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="19.9315" cy="19.7905" r="18.2325" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default SubscribeCTA;
