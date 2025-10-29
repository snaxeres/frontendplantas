/**
 * Rutas de la app
 */
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import PlantaPage from '../pages/PlantaPage'
import CrearEditarPlanta from '../pages/CrearEditarPlanta'
import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'

export default function AppRoutes() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container py-8">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/plantas/crear" element={<CrearEditarPlanta />} />
          <Route path="/plantas/:id/editar" element={<CrearEditarPlanta />} />
          <Route path="/plantas/:id" element={<PlantaPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
