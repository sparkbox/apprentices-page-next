import React from 'react';
import styles from './call-to-action.module.scss';

const CallToAction = () => (
  <footer className={styles['call-to-action']}>
    <div className={styles['call-to-action__container']}>
      <div className={styles['call-to-action__text-container']}>
        <h2>Ready to Apply?</h2>
        <p>
          Take a dive into the world of clean, responsive,
          full-stack development as you learn what it takes to build a better web.
        </p>
        <a href="https://sparkbox.breezy.hr/p/a996600dfdcc-sparkbox-remote-full-stack-apprentice">Learn More & Apply</a>
      </div>
      <div aria-hidden className={styles['call-to-action__art-container']}>
        <div className={styles['call-to-action__grid']}>
          <img src="/apprentices/Angus.png" alt="" />
          <img src="/apprentices/Alice.png" alt="" />
          <img src="/apprentices/Sheridan.png" alt="" />
          <img src="/apprentices/Hunter.png" alt="" />
          <img src="/apprentices/Merani.png" alt="" />
          <div className={styles['call-to-action__grid--shape1']}>
            <svg viewBox="0 0 40 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.00133 32.5401L20.2337 2.69278L37.4661 32.5401H3.00133Z" stroke="#FE3CB0" />
            </svg>
          </div>
          <div className={styles['call-to-action__grid--shape2']}>
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="19.9315" cy="19.7905" r="18.2325" stroke="#01F5AC" />
            </svg>
          </div>
          <div className={styles['call-to-action__grid--shape3']}>
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="19.9315" cy="19.7905" r="18.2325" stroke="#01F5AC" />
            </svg>
          </div>
          <div className={styles['call-to-action__grid--shape4']}>
            <svg viewBox="0 0 40 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.00133 32.5401L20.2337 2.69278L37.4661 32.5401H3.00133Z" stroke="#FE3CB0" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default CallToAction;
