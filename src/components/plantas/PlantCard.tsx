/**
 * Card que muestra una planta resumen
 */
import React from 'react'
import { Link } from 'react-router-dom'
import { Planta } from '../../types/Planta'

export const PlantCard: React.FC<{ planta: Planta }> = ({ planta }) => {
  return (
    <article className="bg-white rounded shadow overflow-hidden">
      {planta.imagen_url ? (
        <img src={planta.imagen_url} alt={planta.nombre_comun} className="w-full h-48 object-cover" loading="lazy" />
      ) : (
        <div className="w-full h-48 bg-gray-100 flex items-center justify-center text-gray-500">Sin imagen</div>
      )}
      <div className="p-4">
        <h3 className="font-semibold text-lg"><Link to={`/plantas/${planta._id}`}>{planta.nombre_comun}</Link></h3>
        <p className="text-sm text-gray-600">{planta.nombre_cientifico}</p>
        <p className="text-sm text-gray-500 mt-2">{planta.familia}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded">{planta.categoria}</span>
          <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded">{planta.requisitos_sol}</span>
        </div>
      </div>
    </article>
  )
}
