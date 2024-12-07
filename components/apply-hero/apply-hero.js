import React from 'react';
import Logo from '../logo/logo';
import Link from '../link/link';
import styles from './apply-hero.module.scss';

const ApplyHero = () => (
  <header className={styles['apply-hero']}>
    <div className={styles['apply-hero__container']}>
      <Logo />
      <div className={styles['apply-hero__header-content']}>
        <div className={styles['apply-hero__text']}>
          <h1>Become an Apprentice</h1>
          <p>
            We&apos;re honored that you&apos;re here!
            We trust that you&apos;ve read all about our apprenticeships, but if not,
            {' '}
            <Link href="/" ariaLabel="">
              you&apos;ll want to take a few minutes to do that.
            </Link>
          </p>
        </div>
        <div aria-hidden className={styles['apply-hero__art-container']}>
          <div className={styles['apply-hero__grid']}>
            <img src="/apprentices/Teresita.png" alt="" />
            <img src="/apprentices/Jared.png" alt="" />
            <img src="/apprentices/Marissa.png" alt="" />
            <img src="/apprentices/Bennett.png" alt="" />
            <div className={styles['apply-hero__grid--shape1']}>
              <svg viewBox="0 0 40 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.00133 32.5401L20.2337 2.69278L37.4661 32.5401H3.00133Z" stroke="#FE3CB0" />
              </svg>
            </div>
            <div className={styles['apply-hero__grid--shape2']}>
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="19.9315" cy="19.7905" r="18.2325" stroke="#01F5AC" />
              </svg>
            </div>
            <div className={styles['apply-hero__grid--shape3']}>
              <svg viewBox="0 0 40 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.00133 32.5401L20.2337 2.69278L37.4661 32.5401H3.00133Z" stroke="#FE3CB0" />
              </svg>
            </div>
            <div className={styles['apply-hero__grid--shape4']}>
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="19.9315" cy="19.7905" r="18.2325" stroke="#01F5AC" />
              </svg>
            </div>
            <div className={styles['apply-hero__grid--shape5']}>
              <svg viewBox="0 0 40 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.00133 32.5401L20.2337 2.69278L37.4661 32.5401H3.00133Z" stroke="#FE3CB0" />
              </svg>
            </div>
            <div className={styles['apply-hero__grid--shape6']}>
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="19.9315" cy="19.7905" r="18.2325" stroke="#01F5AC" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default ApplyHero;
