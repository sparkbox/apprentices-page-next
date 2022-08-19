import React from 'react';
import Head from 'next/head';
import styles from './index.module.scss';
import Footer from '../../components/footer/footer';

const ApplyPage = () => (
  <div className={styles.container}>
    <Head>
      <title>Become a Sparkbox Apprentice</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <header>
      <div>
        <a href="https://sparkbox.com">
          <span>Sparkbox</span>
        </a>
      </div>
    </header>

    <main>
      <h1>Ullam Pariatur Rerum Tenetur</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Officia nam impedit rem?
        Dolorum distinctio provident officiis vero,
        sapiente debitis dicta vitae aut perferendis ad,
        eos veritatis iusto harum dolores eligendi fuga,
        omnis culpa quod ut qui porro a sed repudiandae.
      </p>
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
        Repellendus, voluptatibus ratione laudantium nisi minima dignissimos commodi similique qui.
      </p>
    </main>

    <Footer />
  </div>
);

export default ApplyPage;
