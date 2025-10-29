/**
 * Servicio de plantas: define llamadas al backend.
 * Cada función devuelve la promesa de axios.
 */
import api from './axios'
import { Planta } from '../types/Planta'

export const getPlantas = (params?: Record<string, any>) => api.get('/plantas', { params })
export const getPlanta = (id: string) => api.get(`/plantas/${id}`)
export const createPlanta = (data: Partial<Planta>) => api.post('/plantas', data)
export const updatePlanta = (id: string, data: Partial<Planta>) => api.put(`/plantas/${id}`, data)
export const deletePlanta = (id: string) => api.delete(`/plantas/${id}`)
export const getCategorias = () => api.get('/plantas/categorias')
export const searchPlantas = (q: string) => api.get('/plantas/buscar', { params: { q } })
