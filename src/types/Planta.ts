/**
 * Typings for Planta as returned by backend
 */
export interface Planta {
  _id: string
  nombre_comun: string
  nombre_cientifico: string
  familia?: string
  categoria: 'Árboles' | 'Arbustos' | 'Flores' | 'Cactus' | 'Hierbas' | 'Plantas Acuáticas'
  descripcion?: string
  ubicacion: string[]
  beneficios: string[]
  meses_plantacion: number[]
  meses_poda: number[]
  imagen_url?: string
  requisitos_sol: 'Pleno sol' | 'Media sombra' | 'Sombra'
  requisitos_riego: 'Bajo' | 'Moderado' | 'Alto'
  altura_maxima?: number
  clima_recomendado: string[]
}
