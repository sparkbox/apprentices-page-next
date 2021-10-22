import React from 'react';
import '../styles/global.scss';

// This default export is required in a new `pages/_app.js` file.
// Disable the need for propTypes for _app.js
// eslint-disable-next-line react/prop-types
export default function MyApp({ Component, pageProps }) {
  // Allow the spread operator on the line of code below:
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />;
}
