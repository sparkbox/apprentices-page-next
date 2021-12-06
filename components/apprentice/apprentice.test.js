/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Apprentice from './apprentice';

describe('the Apprentice component', () => {
  let image;
  let name;
  let renderedLinks;

  beforeAll(() => {
    const links = [
      { href: 'https://www.linkedin.com/', text: 'Linkedin' },
      { href: 'https://www.github.com/', text: 'Github' },
    ];

    render(<Apprentice image="/apprentices/image.png" name="First Last" links={links} />);

    image = screen.getByRole('img');
    name = screen.getByRole('heading');
    renderedLinks = screen.getAllByRole('link');
  });

  it('renders image prop with appropriate src path', () => {
    expect(image).toHaveAttribute('src', '/apprentices/image.png');
  });

  it('renders name prop', () => {
    expect(name).toHaveTextContent('First Last');
  });

  it('adds name prop as alt attribute to image', () => {
    expect(image).toHaveAttribute('alt', 'a portrait of First Last');
  });

  it('renders links props given an href and text in the correct order', () => {
    expect(renderedLinks[0]).toHaveAttribute('href', 'https://www.linkedin.com/');
    expect(renderedLinks[0]).toHaveTextContent('Linkedin');
  });
});
