import { render, screen } from '@testing-library/react';

import { expect, test } from 'vitest';
import I18next from '../../../LangugeChange/I18next';


test('renders text in My Section', () => {
  render(<I18next/>);
  
  // Use getByText to assert the presence of the text
  const textElement = screen.getByText("Your Domain name");
  expect(textElement).toBeInTheDocument();
});