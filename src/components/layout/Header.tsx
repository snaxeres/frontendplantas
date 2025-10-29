/**
 * Header component
 */
import React from 'react'
import { Link } from 'react-router-dom'

export const Header: React.FC = () => {
  return (
    <header className="bg-white shadow">
      <div className="container flex items-center justify-between py-4">
        <Link to="/" className="text-xl font-bold">Enciclopedia de Plantas Argentina</Link>
        <nav>
          <Link to="/plantas/crear" className="text-sm text-green-600">Crear planta</Link>
        </nav>
      </div>
    </header>
  )
}
