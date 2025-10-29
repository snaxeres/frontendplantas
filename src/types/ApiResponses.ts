export interface ListResponse<T> {
  status: 'success' | string
  payload: T[]
  totalPages: number
  prevPage: number | null
  nextPage: number | null
  page: number
  hasPrevPage: boolean
  hasNextPage: boolean
  prevLink: string | null
  nextLink: string | null
}

export interface SingleResponse<T> {
  status: 'success' | string
  payload: T
}
