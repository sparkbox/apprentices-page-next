/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CurrentApprentices from './current-apprentices.js';

describe('the CurrentApprentices component', () => {
  let renderedImages;
  let version;

  beforeAll(() => {
    const currentApprenticeClass = {
      version: '14.0',
      currentApprentices: [
        {
          name: 'John Doe',
          image: '/apprentices/John.png',
          links: [
            { href: 'https://www.linkedin.com/', text: 'Linkedin' },
            { href: 'personal', text: 'Personal' },
            { href: 'https://www.github.com/', text: 'Github' },
          ],
        },
        {
          name: 'Jane Doe',
          image: '/apprentices/Jane.png',
          links: [
            { href: 'https://www.linkedin.com/', text: 'Linkedin' },
            { href: 'personal', text: 'Personal' },
            { href: 'https://www.github.com/', text: 'Github' },
          ],
        },
      ],
    };

    render(<CurrentApprentices currentApprenticeClass={currentApprenticeClass} />);

    renderedImages = screen.getAllByRole('img');
    version = screen.getByRole('heading', {
      name: /current apprentices/i,
    });
  });

  it('renders the current apprentices in the correct order', () => {
    expect(renderedImages[0]).toHaveAttribute('src', '/apprentices/John.png');
    expect(renderedImages[1]).toHaveAttribute('src', '/apprentices/Jane.png');
  });
  it('renders the correct version number', () => {
    expect(version).toHaveTextContent('v14.0');
  });
});
