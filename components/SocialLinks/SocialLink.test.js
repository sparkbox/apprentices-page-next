/**
 * @jest-environment jsdom
 */

import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SocialLinks from './SocialLinks';

describe('the Link component', () => {
  it('renders nothing when passed empty array', async () => {
    const { container } = render(<SocialLinks links={[]} />);
    expect(container.innerHTML).toBe('');
  });

  it('renders nothing when links is not defined', async () => {
    const { container } = render(<SocialLinks />);
    expect(container.innerHTML).toBe('');
  });

  it('renders links given an href and text in the correct order', () => {
    render(<SocialLinks links={[{ href: 'https://www.facebook.com/', text: 'facebook' }, { href: 'https://www.google.com/', text: 'google' }]} />);
    const links = screen.getAllByRole('link');
    expect(links[0]).toHaveAttribute('href', 'https://www.facebook.com/');
    expect(links[0]).toHaveTextContent('facebook');
    expect(links[1]).toHaveAttribute('href', 'https://www.google.com/');
    expect(links[1]).toHaveTextContent('google');
  });
});