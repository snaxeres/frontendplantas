import React from 'react'
import { Planta } from '../../types/Planta'
import { PlantCard } from './PlantCard'

export const PlantList: React.FC<{ plantas: Planta[] }> = ({ plantas }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {plantas.map(p => (
        <PlantCard key={p._id} planta={p} />
      ))}
    </div>
  )
}
