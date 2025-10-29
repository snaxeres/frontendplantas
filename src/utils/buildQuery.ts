/**
 * Small helper to build query strings from params object (removes undefined)
 */
export function buildQuery(params: Record<string, any>){
  const qp = new URLSearchParams()
  Object.entries(params).forEach(([k,v])=>{
    if(v === undefined || v === null || v === '') return
    if(Array.isArray(v)) v.forEach(item=> qp.append(k, String(item)))
    else qp.set(k, String(v))
  })
  return qp.toString()
}
