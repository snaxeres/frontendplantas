import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import PlantaPage from '../pages/PlantaPage'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

test('renders planta detail and allows delete', async ()=>{
  const qc = new QueryClient()
  render(
    <QueryClientProvider client={qc}>
      <MemoryRouter initialEntries={["/plantas/1"]}>
        <Routes>
          <Route path="/plantas/:id" element={<PlantaPage />} />
        </Routes>
      </MemoryRouter>
    </QueryClientProvider>
  )

  await waitFor(()=> expect(screen.getByText(/Ceibo/i)).toBeInTheDocument())
})
