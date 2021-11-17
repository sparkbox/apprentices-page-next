/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PreviousApprentices from './previous-apprentices';

describe('the PreviousApprentices component', () => {
  it('renders', () => {
    const apprenticeClassesSevenAndEight = [
      {
        version: '7.0',
        apprentices: [
          { name: 'Betty Baker' },
          {
            name: 'Heather Taylor',
            status: 'previous',
          },
        ],
      },
      {
        version: '8.0',
        apprentices: [
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
        ],
      },
    ];

    render(
      <PreviousApprentices
        previousApprenticeGroups={apprenticeClassesSevenAndEight}
      />,
    );
    expect(screen.getByText('Betty Baker')).toBeInTheDocument();
    expect(screen.getByText('Travis Sanon')).toBeInTheDocument();
  });
});
