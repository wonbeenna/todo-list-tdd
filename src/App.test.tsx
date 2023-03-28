import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

it('제목으로 TODO APP이 출력되어야 한다.', () => {
  render(<App />);
  const linkElement = screen.getByText(/TODO APP/i);
  expect(linkElement).toBeInTheDocument();
});
