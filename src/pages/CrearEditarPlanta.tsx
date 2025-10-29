/**
 * Página para crear o editar una planta
 */
import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { PlantaForm } from '../components/forms/PlantaForm'
import { usePlanta, useUpdatePlantaById, useDeletePlantaById } from '../hooks/usePlanta'
import { useCreatePlanta } from '../hooks/usePlantas'

export default function CrearEditarPlanta(){
  const { id } = useParams()
  const navigate = useNavigate()
  const { data } = usePlanta(id)
  const create = useCreatePlanta()
  const update = useUpdatePlantaById(id)

  const onSubmit = async (vals: any) => {
    try{
      if(id){
        await update.mutateAsync(vals)
        navigate(`/plantas/${id}`)
      } else {
        const res = await create.mutateAsync(vals)
        const createdId = res.payload?._id || res.payload
        navigate(`/plantas/${createdId}`)
      }
    }catch(e){
      console.error(e)
      alert((e as any).message || 'Error')
    }
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">{id? 'Editar Planta' : 'Crear Planta'}</h2>
      <PlantaForm initial={data?.payload} onSubmit={onSubmit} />
    </div>
  )
}
