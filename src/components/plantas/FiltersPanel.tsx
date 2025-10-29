import React from 'react'

export const FiltersPanel: React.FC<{
  categoria?: string
  requisitos_sol?: string
  requisitos_riego?: string
  clima_recomendado?: string
  onChange: (next: Record<string, any>) => void
}> = ({ onChange }) => {
  return (
    <aside className="bg-white p-4 rounded shadow">
      <h4 className="font-semibold mb-2">Filtros</h4>
      <div className="space-y-2">
        <label className="block text-sm">Categoría</label>
        <select onChange={e => onChange({ categoria: e.target.value })} className="w-full border rounded px-2 py-1">
          <option value="">Todas</option>
          <option>Árboles</option>
          <option>Arbustos</option>
          <option>Flores</option>
          <option>Cactus</option>
          <option>Hierbas</option>
          <option>Plantas Acuáticas</option>
        </select>
      </div>
    </aside>
  )
}
