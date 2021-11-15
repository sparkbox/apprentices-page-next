/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ApprenticeStatusIndicator from './apprentice-status-indicator';

describe('the ApprenticeStatusIndicator component', () => {
  it('should not render anything when passed nothing', () => {
    const { container } = render(<ApprenticeStatusIndicator />);
    expect(container).toBeEmptyDOMElement();
  });

  it('should render a solid triangle when passed "current"', () => {
    render(<ApprenticeStatusIndicator status="current" />);
    expect(screen.getByTestId('status-indicator')).toHaveClass('current-employee-status');
  });

  it('should render a hollow triangle when passed "previous"', () => {
    render(<ApprenticeStatusIndicator status="previous" />);
    expect(screen.getByTestId('status-indicator')).toHaveClass('past-employee-status');
  });
});
