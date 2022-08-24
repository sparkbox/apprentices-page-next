import React from 'react';
import styles from './apprentice-qualities.module.scss';

const ApprenticeQualities = () => (
  <section className={styles['apprentice-qualities']}>
    <div className={styles['apprentice-qualities__main']}>
      <div className={styles['apprentice-qualities__article']}>
        <h2 className={`${styles.primary} ${styles['apprentice-qualities__article-heading']}`}>
          What we look for
        </h2>
        <h3 className={
          styles['apprentice-qualities__article-subheading']
        }
        >
          Qualities of Successful Apprentices
        </h3>
        <div className={styles['apprentice-qualities__article-text']}>
          <p>
            We build responsive, standards-compliant, content-focused,
            well-crafted, accessible, valuable, beautiful websites and apps,
            and we’re looking for some beginner web creators that want to do the same.
          </p>
          <p>
            Passion, character, and initiative are a requirement,
            and we’re looking for those who have at least a beginning
            knowledge of web development fundamentals. This apprenticeship
            will help build your technical and professional skill set, as we
            take a holistic approach to develop you into the sort of individual
            we’d want to hire. And we may do just that!
          </p>
          <p>
            We’re looking for folks interested in one of our three apprenticeship tracks:
          </p>
          <ul>
            <li>Full-Stack Web Development</li>
            <li>Frontend Design</li>
            <li>UI/UX Design</li>
          </ul>
          <p>
            What we’re looking for most, however, are individuals who
            are excited to make their mark on the web industry. In your application,
            provide anything and everything you can that will convince us
            you are the best fit for this opportunity.
          </p>
        </div>
        <img
          src="/apprentice-qualities.svg"
          alt="The three qualities sparkbox looks for in apprentices: Passion, Character, and Initiative."
          className={styles['apprentice-qualities__image']}
        />
      </div>
    </div>
  </section>
);

export default ApprenticeQualities;
