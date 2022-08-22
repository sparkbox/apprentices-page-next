import React from 'react';
import styles from './subscribe-cta.module.scss';

const SubscribeCTA = () => (
  <footer className={styles['subscribe-cta']}>
    <div className={styles['subscribe-cta__container']}>
      <div className={styles['subscribe-cta__text-container']}>
        <h2>Deserunt, Nulla Non?</h2>
        <p>
          Ab repellendus, repudiandae amet itaque.
          Quod doloribus dolore sapiente id accusamus in deserunt,
          incidunt facere porro excepturi iste architecto quasi.
          Adipisci expedita quia modi aspernatur.
          Hic pariatur eos voluptatem tenetur natus.
          Necessitatibus inventore vero reiciendis culpa excepturi saepe repudiandae.
        </p>
        <p>
          Alias placeat fuga voluptates, impedit optio labore eius vitae explicabo.
          Tempora exercitationem quis accusantium illo! Doloribus, deleniti!
          Repellendus, voluptatibus ratione laudantium minima dignissimos commodi similique qui.
        </p>
        <a href="https://apprentices.sparkbox.com">Consectetur Adipisicing Elit</a>
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
