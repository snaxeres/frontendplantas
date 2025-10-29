import React from 'react'

export const Pagination: React.FC<{
  page: number
  totalPages: number
  onChange: (page: number) => void
}> = ({ page, totalPages, onChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)
  return (
    <nav className="flex items-center justify-center space-x-2 mt-4">
      {pages.map(p => (
        <button key={p} onClick={() => onChange(p)} className={`px-3 py-1 rounded ${p===page? 'bg-green-600 text-white':'bg-white border'}`} aria-current={p===page}>
          {p}
        </button>
      ))}
    </nav>
  )
}
