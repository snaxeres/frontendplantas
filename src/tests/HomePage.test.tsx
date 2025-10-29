import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

test('renders list of plantas from API', async () => {
  const qc = new QueryClient()
  render(
    <QueryClientProvider client={qc}>
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    </QueryClientProvider>
  )

  await waitFor(() => expect(screen.getByText(/Ceibo/i)).toBeInTheDocument())
})
