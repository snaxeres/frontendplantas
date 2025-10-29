/**
 * Hook para listado de plantas con React Query
 * params: object con filtros, page, limit, q, sort, etc.
 */
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { getPlantas, createPlanta, updatePlanta, deletePlanta } from '../api/plantasService'
import { ListResponse } from '../types/ApiResponses'
import { Planta } from '../types/Planta'

export const usePlantas = (params: Record<string, any>) => {
  const query = useQuery<ListResponse<Planta>>({
    queryKey: ['plantas', params],
    queryFn: async () => (await getPlantas(params)).data,
    // keepPreviousData is now part of options but TypeScript definitions may vary; use staleTime instead
    staleTime: 1000 * 30
  })
  return query
}

export const useCreatePlanta = () => {
  const qc = useQueryClient()
  return useMutation({
    mutationFn: (data: Partial<Planta>) => createPlanta(data).then(r => r.data),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['plantas'] })
  })
}

export const useUpdatePlanta = (id?: string) => {
  const qc = useQueryClient()
  return useMutation({
    mutationFn: (data: Partial<Planta>) => updatePlanta(id!, data).then(r => r.data),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['plantas'] })
      if (id) qc.invalidateQueries({ queryKey: ['planta', id] })
    }
  })
}

export const useDeletePlanta = () => {
  const qc = useQueryClient()
  return useMutation({
    mutationFn: (id: string) => deletePlanta(id).then(r => r.data),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['plantas'] })
  })
}
