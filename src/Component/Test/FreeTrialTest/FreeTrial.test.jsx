import { render, screen } from '@testing-library/react';

import { expect, test } from 'vitest';
import FreeTrial from '../../../Pages/Home/FreeTrial/FreeTrial';


test('renders text in My Section', () => {
  render(<FreeTrial/>);
  
  // Use getByText to assert the presence of the text
  const textElement = screen.getByText(/Application Sent/);
  expect(textElement).toBeInTheDocument();
});