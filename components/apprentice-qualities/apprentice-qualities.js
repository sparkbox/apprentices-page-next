import React from 'react';
import styles from './apprentice-qualities.module.scss';

const ApprenticeQualities = () => (
  <section className={styles['apprentice-qualities']}>
    <img
      src="/apprentice-qualities.svg"
      alt="The three qualities sparkbox looks for in apprentices: Passion, Character, and Initiative."
      className={styles['apprentice-qualities__image']}
    />
    <div className={styles['apprentice-qualities__body']}>
      <h2 className={styles['apprentice-qualities__header']}>
        Qualities of Successful Apprentices
      </h2>
      <p className={
        `${styles.primary} ${styles['apprentice-qualities__flavor']}`
      }>
        What we look for
      </p>
      <article>
        <p>
          We build responsive, standards-compliant, content-focused,
          well-crafted, accessible, valuable, beautiful web sites and apps,
          and we're looking for some web geeks that want to do the same.
        </p>
        <p>
          Passion, character, and initiative are a requirement.
          A long resumé is not—as long as you care about the right things, we can help build your skillset.
          This is true for those we hire, and it is equally true for our apprentices.
          Through your apprenticeship, we hope to help develop you into the sort of individual
          we’d want to hire. And we may do just that.
        </p>
        <p>
          We’re looking primarily for those interested in an apprenticeship in web development—frontend,
          backend, or anything code related. What we’re looking for most, however, are individuals who are
          excited to make their mark on the web industry. In your application, provide anything and everything
          you can that will convince us you are that geek.
        </p>
      </article>
    </div>
  </section>
);


export default ApprenticeQualities;
