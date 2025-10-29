/**
 * Formulario para crear/editar planta usando react-hook-form + zod
 */
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Planta } from '../../types/Planta'

export const plantaSchema = z.object({
  nombre_comun: z.string().min(1, 'Requerido'),
  nombre_cientifico: z.string().min(1, 'Requerido'),
  familia: z.string().optional(),
  categoria: z.enum(['Árboles','Arbustos','Flores','Cactus','Hierbas','Plantas Acuáticas']),
  descripcion: z.string().optional(),
  ubicacion: z.array(z.string()).optional(),
  beneficios: z.array(z.string()).optional(),
  meses_plantacion: z.array(z.number().min(1).max(12)).optional(),
  meses_poda: z.array(z.number().min(1).max(12)).optional(),
  imagen_url: z.string().url().optional(),
  requisitos_sol: z.enum(['Pleno sol','Media sombra','Sombra']),
  requisitos_riego: z.enum(['Bajo','Moderado','Alto']),
  altura_maxima: z.number().optional(),
  clima_recomendado: z.array(z.string()).optional()
})

export type PlantaFormValues = z.infer<typeof plantaSchema>

export const PlantaForm: React.FC<{
  initial?: Partial<Planta>
  onSubmit: (data: PlantaFormValues) => void
}> = ({ initial, onSubmit }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<PlantaFormValues>({
    resolver: zodResolver(plantaSchema),
    defaultValues: initial as any
  })

  useEffect(()=>{ reset(initial as any) }, [initial, reset])

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 bg-white p-4 rounded shadow">
      <div>
        <label className="block text-sm">Nombre común</label>
        <input {...register('nombre_comun')} className="w-full border rounded px-2 py-1" />
        {errors.nombre_comun && <p className="text-red-600 text-sm">{errors.nombre_comun.message}</p>}
      </div>

      <div>
        <label className="block text-sm">Nombre científico</label>
        <input {...register('nombre_cientifico')} className="w-full border rounded px-2 py-1" />
        {errors.nombre_cientifico && <p className="text-red-600 text-sm">{errors.nombre_cientifico.message}</p>}
      </div>

      <div>
        <label className="block text-sm">Categoría</label>
        <select {...register('categoria')} className="w-full border rounded px-2 py-1">
          <option value="Árboles">Árboles</option>
          <option value="Arbustos">Arbustos</option>
          <option value="Flores">Flores</option>
          <option value="Cactus">Cactus</option>
          <option value="Hierbas">Hierbas</option>
          <option value="Plantas Acuáticas">Plantas Acuáticas</option>
        </select>
      </div>

      <div>
        <label className="block text-sm">Requisitos de sol</label>
        <select {...register('requisitos_sol')} className="w-full border rounded px-2 py-1">
          <option>Pleno sol</option>
          <option>Media sombra</option>
          <option>Sombra</option>
        </select>
      </div>

      <div>
        <label className="block text-sm">Requisitos riego</label>
        <select {...register('requisitos_riego')} className="w-full border rounded px-2 py-1">
          <option>Bajo</option>
          <option>Moderado</option>
          <option>Alto</option>
        </select>
      </div>

      <div>
        <label className="block text-sm">Imagen URL</label>
        <input {...register('imagen_url')} className="w-full border rounded px-2 py-1" />
        {errors.imagen_url && <p className="text-red-600 text-sm">{errors.imagen_url.message}</p>}
      </div>

      <div className="flex justify-end">
        <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded">Guardar</button>
      </div>
    </form>
  )
}
