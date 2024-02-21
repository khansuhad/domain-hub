import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { expect, test, vitest } from 'vitest';
import FreeTrial from '../../../Pages/Home/FreeTrial/FreeTrial';

// Mocking the axiosPublic module to simulate a successful response
vitest.mock('../../../Hock/useAxiosPublic', () => {
  return {
    __esModule: true,
    default: () => ({
      post: vitest.fn(() => Promise.resolve({ data: { insertedId: true } })),
    }),
  };
});

test('renders success message when application is sent', async () => {
  render(<FreeTrial />);
  
  // Simulate form submission
  fireEvent.submit(screen.getByRole('button', { name: /trialSectionTitle/i }));

  // Wait for the asynchronous operations to complete
  await waitFor(() => {
    // Use getByText to assert the presence of the success message
    const successMessage = screen.getByText(/Application Sent/i);
    expect(successMessage).toBeInTheDocument();
  });
});
