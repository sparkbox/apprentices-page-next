/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PreviousApprenticesGroup from './previous-apprentices-group';

describe('the PreviousApprenticesGroup component', () => {
  const apprenticeClassSevenApprentices = [
    { name: 'Betty Baker' },
    {
      name: 'Heather Taylor',
      status: 'previous',
    },
  ];

  const apprenticeClassEightApprentices = [
    {
      name: 'Yosevu Kilonzo',
      status: 'current',
    },
    {
      name: 'Corinne Ling',
      status: 'previous',
    },
    {
      name: 'Travis Sanon',
      status: 'current',
    },
  ];

  it('renders class seven correctly', () => {
    render(<PreviousApprenticesGroup
      version="7.0"
      apprentices={apprenticeClassSevenApprentices}
    />);

    expect(screen.getByTestId('7.0')).toBeTruthy();
    expect(screen.getByTestId('Betty Baker')).toBeTruthy();
    expect(screen.getByTestId('Heather Taylor')).toBeTruthy();
  });

  it('renders class eight correctly', () => {
    render(<PreviousApprenticesGroup
      version="8.0"
      apprentices={apprenticeClassEightApprentices}
    />);

    expect(screen.getByTestId('8.0')).toBeTruthy();
    expect(screen.getByTestId('Yosevu Kilonzo')).toBeTruthy();
    expect(screen.getByTestId('Corinne Ling')).toBeTruthy();
    expect(screen.getByTestId('Travis Sanon')).toBeTruthy();
  });
});
