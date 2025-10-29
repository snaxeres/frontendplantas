/**
 * Simple Footer
 */
import React from 'react'

export const Footer: React.FC = () => (
  <footer className="bg-white border-t py-4 mt-8">
    <div className="container text-center text-sm text-gray-600">© {new Date().getFullYear()} Enciclopedia de Plantas Argentina</div>
  </footer>
)
