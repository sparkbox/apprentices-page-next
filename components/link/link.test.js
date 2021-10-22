/**
 * @jest-environment jsdom
 */

import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Link from './link';

describe('the Link component', () => {
  it('renders a link with the correct href given an href prop', () => {
    render(<Link href='http://some/url'>hello!</Link>);
    expect(screen.getByRole('link')).toHaveAttribute('href', 'http://some/url');
  });

  it('renders a link given an href and text', () => {
    render(<Link href='http://some/url'>hello!</Link>);
    expect(screen.getByRole('link')).toHaveTextContent('hello');
  });
});
