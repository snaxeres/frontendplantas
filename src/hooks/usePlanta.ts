/**
 * Hook para una planta individual
 */
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { getPlanta, updatePlanta as svcUpdate, deletePlanta } from '../api/plantasService'
import { Planta } from '../types/Planta'

export const usePlanta = (id?: string) => {
  return useQuery({
    queryKey: ['planta', id],
    queryFn: () => getPlanta(id!).then(r => r.data),
    enabled: !!id
  })
}

export const useUpdatePlantaById = (id?: string) => {
  const qc = useQueryClient()
  return useMutation({
    mutationFn: (data: Partial<Planta>) => svcUpdate(id!, data).then(r => r.data),
    onSuccess: () => {
      if (id) qc.invalidateQueries({ queryKey: ['planta', id] })
      qc.invalidateQueries({ queryKey: ['plantas'] })
    }
  })
}

export const useDeletePlantaById = () => {
  const qc = useQueryClient()
  return useMutation({
    mutationFn: (id: string) => deletePlanta(id).then(r => r.data),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['plantas'] })
  })
}
