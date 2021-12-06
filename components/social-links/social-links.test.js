/**
 * @jest-environment jsdom
 */

import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SocialLinks from './social-links';

describe('the Link component', () => {
  it('renders nothing when passed empty array', async () => {
    const { container } = render(<SocialLinks links={[]} name="name" />);
    expect(container.innerHTML).toBe('');
  });

  it('renders nothing when links is not defined', async () => {
    const { container } = render(<SocialLinks name="name" />);
    expect(container.innerHTML).toBe('');
  });

  it('renders multiple social links in the correct order', () => {
    render(<SocialLinks
      links={[
        { href: 'https://www.facebook.com/', text: 'facebook' },
        { href: 'https://www.google.com/', text: 'google' },
      ]}
      name="name"
    />);
    const links = screen.getAllByRole('link');
    expect(links[0]).toHaveTextContent('facebook');
    expect(links[1]).toHaveTextContent('google');
  });

  it('renders a social link', () => {
    render(<SocialLinks links={[{ href: 'https://www.linkedin.com/', text: 'LinkedIn' }]} name="First Last" />);
    const link = screen.getByRole('link');
    expect(link).toHaveTextContent('LinkedIn');
    expect(link).toHaveAttribute('href', 'https://www.linkedin.com/');
    expect(link).toHaveAttribute('aria-label', "First Last's LinkedIn");
  });
});
