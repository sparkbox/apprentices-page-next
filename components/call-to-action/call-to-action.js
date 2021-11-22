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
          <img src="/apprentices/Michael.png" alt="" />
          <img src="/apprentices/Neil.png" alt="" />
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
    <div className={styles['call-to-action__footer']}>
      <p>This site was proudly built by Sparkbox apprentices Version 14.0</p>
      <a href="https://www.seesparkbox.com">
        <svg width="29" height="33" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.96 22.058v4.377h1.392l2.571-4.377H6.96Zm14.77-9.493h.02a2.19 2.19 0 0 0 2.185-2.198A2.19 2.19 0 0 0 21.75 8.17h-.56l-2.572 4.377 3.113.02ZM6.96 8.19v4.98l7.347-4.98H6.96Zm14.79 13.87h-.715l-6.458 4.376h7.173a2.19 2.19 0 0 0 2.185-2.198 2.198 2.198 0 0 0-2.185-2.178Zm7.018-5.233-5.433 3.696a4.058 4.058 0 0 1 2.456 3.735c0 2.237-1.798 4.065-4.041 4.065h-9.918l-6.747 4.572a.278.278 0 0 1-.136.039.224.224 0 0 1-.232-.234c0-.058.02-.097.039-.136l2.494-4.26H5.317a.236.236 0 0 1-.232-.234v-7.645c0-.136.096-.233.232-.233h8.429c.116 0 .232.097.232.233 0 .059-.02.098-.039.137l-3.944 6.73 13.34-9.065H.232A.224.224 0 0 1 0 17.993c0-.078.039-.156.116-.195l4.988-3.384V6.515c0-.116.116-.213.232-.213h11.716l5.123-3.482L24.901.972c.039-.02.078-.04.136-.04.135 0 .232.098.232.234 0 .039-.02.097-.039.136l-2.939 5.039c1.992.252 3.519 1.964 3.519 4.026 0 2.237-1.798 4.066-4.04 4.066H15.794a.224.224 0 0 1-.232-.233c0-.04.02-.078.02-.117l4.388-7.51L5.55 16.379H28.67c.136 0 .232.098.232.234-.019.097-.058.175-.135.214Z" fill="#fff" /></svg>
      </a>
    </div>
  </footer>
);

export default CallToAction;
