import { rest } from 'msw'
import { setupServer } from 'msw/node'
import type { Planta } from '../types/Planta'

const mockPlantas: Planta[] = [
  {
    _id: '1',
    nombre_comun: 'Ceibo',
    nombre_cientifico: 'Erythrina crista-galli',
    familia: 'Fabaceae',
    categoria: 'Árboles',
    descripcion: 'Flor nacional',
    ubicacion: ['Buenos Aires'],
    beneficios: ['Ornamental'],
    meses_plantacion: [3, 4],
    meses_poda: [7],
    imagen_url: '',
    requisitos_sol: 'Pleno sol',
    requisitos_riego: 'Moderado',
    altura_maxima: 10,
    clima_recomendado: ['Templado']
  }
]

// Use wildcard host to match axios baseURL in tests
export const handlers = [
  rest.get('*/plantas', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        status: 'success',
        payload: mockPlantas,
        totalPages: 1,
        prevPage: null,
        nextPage: null,
        page: 1,
        hasPrevPage: false,
        hasNextPage: false,
        prevLink: null,
        nextLink: null
      })
    )
  }),

  rest.get('*/plantas/:id', (req, res, ctx) => {
    const { id } = req.params
    const p = mockPlantas.find(x => x._id === id)
    if (!p) return res(ctx.status(404), ctx.json({ status: 'error', message: 'Not found' }))
    return res(ctx.status(200), ctx.json({ status: 'success', payload: p }))
  }),

  rest.delete('*/plantas/:id', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ status: 'success', payload: null }))
  })
]

export const server = setupServer(...handlers)
