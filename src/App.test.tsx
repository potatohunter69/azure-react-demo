import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // This is the correct import for jest-dom
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/this is a react app hosted on azure made by sami/i);
  expect(linkElement).toBeInTheDocument();
});
