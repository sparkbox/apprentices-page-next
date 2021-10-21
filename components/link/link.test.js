/**
 * @jest-environment jsdom
 */

import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Link from './link';

const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

describe('the Link component', () => {
  beforeEach(() => consoleSpy.mockClear());

  it('renders a link with the correct href given an href prop', () => {
    render(<Link href='http://some/url'>hello!</Link>);
    expect(screen.getByRole('link')).toHaveAttribute('href', 'http://some/url');
  });

  it('renders a link given an href and text', () => {
    render(<Link href='http://some/url'>hello!</Link>);
    expect(screen.getByRole('link')).toHaveTextContent('hello');
  });

  it('renders and logs error if the children type is mismatched', () => {
    render(<Link href='http://some/url'>{4}</Link>)
    expect(console.error).toBeCalledTimes(1);
    consoleSpy.mockClear();
  });
});
