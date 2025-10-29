/**
 * Detail page for a Planta
 */
import React from 'react'
import { useParams, useNavigate, useLocation, Link } from 'react-router-dom'
import { usePlanta, useDeletePlantaById } from '../hooks/usePlanta'

export default function PlantaPage(){
  const { id } = useParams()
  const { data, isLoading } = usePlanta(id)
  const del = useDeletePlantaById()
  const navigate = useNavigate()
  const location = useLocation()

  const onDelete = async ()=>{
    if(!id) return
    if(!confirm('Confirmar eliminación')) return
    await del.mutateAsync(id)
    // go back to list keeping qs
    navigate('/'+ (location.search||''))
  }

  if(isLoading) return <div>Loading...</div>
  if(!data) return <div>No encontrado</div>

  const planta = data.payload

  return (
    <div className="bg-white rounded shadow p-4">
      <nav className="mb-2 text-sm text-gray-600"><Link to={`/${location.search}`}>← Volver</Link></nav>
      <h1 className="text-2xl font-bold">{planta.nombre_comun}</h1>
      <p className="italic">{planta.nombre_cientifico}</p>
      {planta.imagen_url && <img src={planta.imagen_url} alt={planta.nombre_comun} className="w-full max-h-96 object-cover mt-4" loading="lazy" />}
      <div className="mt-4">
        <p>{planta.descripcion}</p>
        <p className="mt-2 text-sm text-gray-600">Familia: {planta.familia}</p>
        <p className="mt-1 text-sm text-gray-600">Categoría: {planta.categoria}</p>
      </div>
      <div className="mt-4 flex gap-2">
        <Link to={`/plantas/${planta._id}/editar`} className="px-3 py-2 bg-blue-600 text-white rounded">Editar</Link>
        <button onClick={onDelete} className="px-3 py-2 bg-red-600 text-white rounded">Eliminar</button>
      </div>
    </div>
  )
}
