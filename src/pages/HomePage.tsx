/**
 * HomePage: listado de plantas con filtros, búsqueda y paginación
 */
import React, { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import debounce from 'lodash.debounce'
import { usePlantas } from '../hooks/usePlantas'
import { PlantList } from '../components/plantas/PlantList'
import { FiltersPanel } from '../components/plantas/FiltersPanel'
import { Pagination } from '../components/plantas/Pagination'

export default function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [localQ, setLocalQ] = useState(searchParams.get('q') || '')

  const params = useMemo(() => {
    return {
      q: searchParams.get('q') || undefined,
      page: Number(searchParams.get('page') || 1),
      limit: Number(searchParams.get('limit') || 9),
      categoria: searchParams.get('categoria') || undefined
    }
  }, [searchParams])

  const { data, isLoading } = usePlantas(params)

  // Debounced sync to URL
  const applyQ = useMemo(() => debounce((q: string) => {
    const next = new URLSearchParams(Object.fromEntries(searchParams.entries()))
    if (q) next.set('q', q)
    else next.delete('q')
    next.set('page', '1')
    setSearchParams(next)
  }, 400), [searchParams, setSearchParams])

  useEffect(()=>{ return () => applyQ.cancel() }, [applyQ])

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      <div className="lg:col-span-1">
        <FiltersPanel onChange={(next) => {
          const qp = new URLSearchParams(Object.fromEntries(searchParams.entries()))
          Object.keys(next).forEach((k) => {
            if (next[k]) qp.set(k, next[k])
            else qp.delete(k)
          })
          qp.set('page', '1')
          setSearchParams(qp)
        }} />
      </div>
      <div className="lg:col-span-3">
        <div className="mb-4 flex items-center gap-4">
          <input aria-label="Buscar" value={localQ} onChange={(e)=>{ setLocalQ(e.target.value); applyQ(e.target.value) }} placeholder="Buscar plantas..." className="flex-1 border rounded px-3 py-2" />
        </div>

        {isLoading && <div>Loading...</div>}

        {data && (
          <>
            <PlantList plantas={data.payload} />
            <Pagination page={data.page} totalPages={data.totalPages} onChange={(p)=>{ const qp = new URLSearchParams(Object.fromEntries(searchParams.entries())); qp.set('page', String(p)); setSearchParams(qp) }} />
          </>
        )}
      </div>
    </div>
  )
}
