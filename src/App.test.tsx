import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Task Management App', () => {
  render(<App />);
  const linkElement = screen.getByText(/Task Management App/i);
  expect(linkElement).toBeInTheDocument();
});
