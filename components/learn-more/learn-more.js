import React from 'react';
import styles from './learn-more.module.scss';

const LearnMore = () => (
  <section className={styles['learn-more']}>
    <div className={styles['learn-more__main']}>
      <div className={styles['learn-more__article']}>
        <h2 className={`${styles.primary} ${styles['learn-more__article-heading']}`}>
          Requirements
        </h2>
        <h3 className={styles['learn-more__article-subheading']}>
          Full-Stack Developer Apprentice
        </h3>
        <div className={styles['learn-more__article-text']}>
          <p>
            Passion, character, and initiative are a requirement,
            and we&apos;re looking for those who have at least a beginning knowledge
            of web development fundamentals who are interested in learning
            both frontend and backend development and
            who are excited to make their mark on the web industry.
          </p>
          <p>
            In 2023, we plan to offer just one Full-Stack Developer Apprenticeship,
            which will run July through December
            (all applications are due on or before April 1 at midnight).
            Late applications will not be considered.
          </p>
        </div>
        <h3 className={styles['learn-more__article-subheading']}>
          Frontend Design Apprentice
        </h3>
        <div className={styles['learn-more__article-text']}>
          <p>
            Passion, character, and initiative are a requirement,
            and we&apos;re looking for those who have have design chops,
            at least beginning knowledge of web development fundamentals,
            and a desire to write beautiful, clean, accessible code.
            At Sparkbox, Frontend Designers are the bridge between design and development,
            practicing in both disciplines.
          </p>
          <p>
            In 2023, we plan to offer one Frontend Design Apprenticeship,
            which will run January through June
            (all applications are due on or before October 1 at midnight).
            Late applications will not be considered.
          </p>
        </div>
        <h3 className={styles['learn-more__article-subheading']}>
          UI/UX Design Apprentice
        </h3>
        <div className={styles['learn-more__article-text']}>
          <p>
            Passion, character, and initiative are a requirement,
            and we&apos;re looking for those who have design chops
            and an interest in user experience research, testing, and best practice on the web.
            This apprenticeship teaches web UI/UX principles, practices, and tools,
            but it does not teach coding.
            It&apos;s more about usability tests and Figma than HTML and CSS.
          </p>
          <p>
            In 2023, we plan to offer one UI/UX Design Apprenticeship
            which will run January through June
            (all applications are due on or before October 1 at midnight).
            Late applications will not be considered.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default LearnMore;
