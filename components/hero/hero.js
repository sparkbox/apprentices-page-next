import React from 'react';
import Logo from '../logo/logo';
import styles from './hero.module.scss';

const Hero = () => (
  <header className={styles['hero']}>
    <div className={styles['hero__container']}>
      <Logo />
      <div className={styles['hero__header-content']}>
        <div className={styles['hero__text']}>
          <h1>Apprenticeships at Sparkbox</h1>
          <p>
            Sparkbox is a team that values education.
            We offer paid apprenticeships because we love what we do,
            we want to share with new talent,
            and we genuinely care about the future of the web.
          </p>
        </div>
        <div aria-hidden className={styles['hero__art-container']}>
          <div className={styles['hero__grid']}>
            <img src="/apprentices/Luis.png" alt="" />
            <img src="/apprentices/Rise.png" alt="" />
            <img src="/apprentices/Melissa.png" alt="" />
            <img src="/apprentices/Flash.png" alt="" />
            <img src="/apprentices/Susmita.png" alt="" />
            <div className={styles['hero__grid--shape1']}>
              <svg viewBox="0 0 40 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.00133 32.5401L20.2337 2.69278L37.4661 32.5401H3.00133Z" stroke="#FE3CB0" />
              </svg>
            </div>
            <div className={styles['hero__grid--shape2']}>
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="19.9315" cy="19.7905" r="18.2325" stroke="#01F5AC" />
              </svg>
            </div>
            <div className={styles['hero__grid--shape3']}>
              <svg viewBox="0 0 40 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.00133 32.5401L20.2337 2.69278L37.4661 32.5401H3.00133Z" stroke="#FE3CB0" />
              </svg>
            </div>
            <div className={styles['hero__grid--shape4']}>
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="19.9315" cy="19.7905" r="18.2325" stroke="#01F5AC" />
              </svg>
            </div>
            <div className={styles['hero__grid--shape5']}>
              <svg viewBox="0 0 40 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.00133 32.5401L20.2337 2.69278L37.4661 32.5401H3.00133Z" stroke="#FE3CB0" />
              </svg>
            </div>
            <div className={styles['hero__grid--shape6']}>
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="19.9315" cy="19.7905" r="18.2325" stroke="#01F5AC" />
              </svg>
            </div>
            <div className={styles['hero__grid--shape7']}>
              <svg viewBox="0 0 40 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.00133 32.5401L20.2337 2.69278L37.4661 32.5401H3.00133Z" stroke="#FE3CB0" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default Hero;
