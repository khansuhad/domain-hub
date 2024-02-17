import { render, screen } from '@testing-library/react';

import { expect, test } from 'vitest';
import HelloWorld from '../../HelloWorld/HelloWorld';



test('renders text in My Section', () => {
  render(<HelloWorld/>);
  
  // Use getByText to assert the presence of the text
  const textElement = screen.getByText("Hello world");
  expect(textElement).toBeInTheDocument();
});