import React from 'react';
import styles from './logo.module.scss';

const Logo = () => (
  <div>
    <svg aria-hidden className={styles['hero__sparkbox-logo--half']} width="41" height="45" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.84 29.708v6.155h1.968l3.635-6.155H9.84Zm20.883-13.35h.027a3.087 3.087 0 0 0 3.089-3.09 3.087 3.087 0 0 0-3.089-3.092h-.793l-3.635 6.155 4.4.028ZM9.84 10.205v7.003l10.387-7.003H9.84Zm20.91 19.504h-1.011l-9.13 6.155H30.75a3.087 3.087 0 0 0 3.089-3.091c0-1.669-1.394-3.064-3.089-3.064Zm9.922-7.358-7.68 5.197a5.706 5.706 0 0 1 3.47 5.252 5.712 5.712 0 0 1-5.712 5.718H16.728l-9.54 6.428c-.054.028-.109.055-.19.055a.316.316 0 0 1-.329-.328c0-.082.028-.137.055-.192l3.526-5.99H7.517a.333.333 0 0 1-.328-.329v-10.75c0-.192.136-.329.328-.329h11.917c.164 0 .328.137.328.328a.395.395 0 0 1-.055.192l-5.576 9.465 18.86-12.748H.328A.316.316 0 0 1 0 23.991c0-.11.055-.219.164-.274l7.052-4.76V7.851c0-.164.164-.3.328-.3h16.564l7.243-4.897 3.854-2.6A.395.395 0 0 1 35.397 0c.191 0 .328.137.328.328a.508.508 0 0 1-.055.192l-4.155 7.085a5.703 5.703 0 0 1 4.975 5.662 5.712 5.712 0 0 1-5.713 5.718h-8.446a.316.316 0 0 1-.328-.328c0-.055.028-.11.028-.165l6.204-10.559L7.845 21.72h32.69c.192 0 .328.137.328.329-.027.136-.082.246-.191.3Z" fill="#fff" />
    </svg>
    <a href="https://sparkbox.com">
      <span className={styles['hero__header-label']}>Sparkbox</span>
      <svg aria-hidden className={styles['hero__sparkbox-logo--full']} width="193" height="52" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.225 34.33v7.112h2.245l4.146-7.112h-6.391Zm23.82-15.427h.032c1.933 0 3.523-1.58 3.523-3.572 0-1.96-1.559-3.572-3.523-3.572h-.904l-4.147 7.113 5.02.031Zm-23.82-7.112v8.092l11.848-8.092H11.225ZM35.077 34.33h-1.154L23.51 41.442h11.568c1.933 0 3.523-1.58 3.523-3.572 0-1.928-1.59-3.54-3.523-3.54Zm11.318-8.504-8.762 6.006a6.596 6.596 0 0 1 3.96 6.07c0 3.635-2.9 6.606-6.516 6.606H19.082L8.2 51.937a.446.446 0 0 1-.218.063.363.363 0 0 1-.374-.38c0-.094.03-.157.062-.22l4.022-6.923H8.574a.382.382 0 0 1-.374-.38V31.674c0-.221.156-.38.374-.38H22.17c.187 0 .374.159.374.38a.461.461 0 0 1-.063.221l-6.36 10.938 21.513-14.73H.374a.363.363 0 0 1-.374-.38c0-.127.062-.253.187-.316l8.044-5.5V9.071c0-.19.187-.347.374-.347H27.5l8.263-5.659L40.159.063A.446.446 0 0 1 40.377 0c.218 0 .374.158.374.38a.592.592 0 0 1-.062.22l-4.74 8.188c3.212.41 5.675 3.192 5.675 6.543 0 3.636-2.9 6.607-6.516 6.607h-9.634a.363.363 0 0 1-.375-.38c0-.063.032-.126.032-.189l7.077-12.202L8.948 25.1H46.24c.218 0 .374.158.374.38-.031.158-.093.284-.218.347ZM72.648 19.314l-2.65 1.454c-.406-.885-1.092-2.75-3.274-2.655-1.216.032-2.339 1.233-2.339 2.94 0 1.738.749 2.94 3.15 4.394 3.21 1.991 4.832 4.14 4.832 7.65 0 3.983-2.245 6.764-5.955 6.764-3.742 0-5.425-2.529-6.454-5.563l2.93-1.454c.656 1.643 1.31 3.572 3.15 3.603 1.528.032 2.744-1.106 2.744-2.971 0-1.707-.686-2.94-3.368-4.52-2.837-1.707-4.614-3.983-4.614-7.524 0-3.825 2.65-6.733 5.8-6.733 4.302 0 5.58 3.572 6.048 4.615ZM77.45 15.047h4.707c4.303 0 6.922 3.034 6.922 7.997 0 5.027-2.619 8.125-6.86 8.125h-1.122v8.187H77.45v-24.31Zm3.647 12.644h.842c2.12 0 3.337-1.707 3.337-4.615 0-2.845-1.248-4.52-3.368-4.52h-.81v9.135ZM101.208 33.919H95.97l-1.091 5.468h-3.523l5.269-24.34h4.115l5.207 24.34h-3.648l-1.091-5.468Zm-4.614-3.32h3.991l-1.934-9.704h-.093l-1.964 9.704ZM110.406 15.047h4.427c4.397 0 7.078 2.908 7.078 7.587 0 2.908-.904 5.12-2.557 6.511l3.586 10.242h-3.928l-2.931-8.85c-.468.063-.905.126-1.372.126h-.624v8.724h-3.648v-24.34h-.031Zm3.679 12.17h.561c2.214 0 3.492-1.58 3.492-4.489 0-2.718-1.278-4.172-3.492-4.172h-.561v8.661ZM133.354 29.525l-1.621 3.034v6.797h-3.648v-24.34h3.648V26.71l4.708-11.696h4.053l-4.739 10.653 5.238 13.688h-4.178l-3.461-9.831ZM145.732 15.047h5.457c3.71 0 6.204 2.529 6.204 6.322 0 2.402-1.091 4.489-2.806 5.374 1.933.822 3.212 2.971 3.212 5.627 0 4.204-2.682 6.986-6.61 6.986h-5.426l-.031-24.31Zm3.586 10.463h1.559c1.652 0 2.712-1.454 2.712-3.762 0-2.023-1.06-3.414-2.681-3.414h-1.59v7.176Zm1.621 10.621c1.84 0 3.025-1.517 3.025-3.761 0-2.181-1.185-3.604-3.056-3.604h-1.59v7.365h1.621ZM168.992 39.798c-4.615 0-7.203-4.489-7.203-12.613 0-8.092 2.62-12.55 7.203-12.55 4.614 0 7.202 4.521 7.202 12.614 0 8.092-2.588 12.549-7.202 12.549Zm0-3.667c2.12 0 3.336-3.16 3.336-8.914 0-5.722-1.247-8.883-3.336-8.883-2.151 0-3.336 3.161-3.336 8.883 0 5.753 1.185 8.914 3.336 8.914ZM183.865 27.09l-4.709-12.043h4.147l2.993 8.693 2.775-8.693h3.835l-4.614 12.296L193 39.388h-4.116l-3.024-8.724-2.931 8.724h-3.804l4.74-12.296Z" fill="#fff" />
      </svg>
    </a>
  </div>
);

export default Logo;
