/**
 * @jest-environment jsdom
 */

import * as React from 'react';
import { render, screen, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import Link from './link';

describe('the Link component', () => {

  test('renders a link given an href and text', () => {
    render(
      <Link href='http://some/url'>
        hello!
      </Link>
    );

    const link = screen.getByRole('link')
    
    expect(link).toHaveAttribute('href', 'http://some/url');
    expect(
      within(link).getByText('hello!')
    ).toBeTruthy();
  });

  test('renders a link given an href and text', () => {
    render(
      <Link href='http://some/url'>
        <span role="button">goodbye</span>
      </Link>
    );
  
    const link = screen.getByRole('link');
    const span = within(screen.getByRole('link')).getByRole('button');

    expect(link).toHaveAttribute('href', 'http://some/url');
    expect(span).toBeTruthy();
    expect(within(span).getByText('goodbye')).toBeTruthy();
  });
});
