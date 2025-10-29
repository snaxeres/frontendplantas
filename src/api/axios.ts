/**
 * Axios instance for the API.
 * baseURL: import.meta.env.VITE_API_URL
 * timeout: 15s
 * Transforms errors and handles common HTTP codes 401/500
 */
import axios, { AxiosError } from 'axios'

// Determine baseURL: prefer Vite's import.meta.env when available, otherwise use process.env
const baseURL = (() => {
  try {
    // Evaluate import.meta.env.VITE_API_URL at runtime in ESM/Vite environments without causing
    // syntax errors in CommonJS/Jest by using the Function constructor so the parser doesn't see
    // the literal `import.meta` during Node/Jest parse time.
    // If that fails, fallback to process.env.VITE_API_URL or empty string.
    // eslint-disable-next-line no-new-func
    const val = new Function('return import.meta.env.VITE_API_URL')()
    if (val) return val
  } catch (e) {
    // ignore
  }
  // Fallback to the production backend (with /api prefix) if no env var is provided.
  return (process.env.VITE_API_URL as string) || 'https://backendplantas.onrender.com/api'
})()

const api = axios.create({ baseURL, timeout: 15000 })

api.interceptors.response.use(
  (res) => res,
  (error: AxiosError) => {
    if (error.response) {
      const status = error.response.status
      if (status === 401) {
        // Could add redirect to login in future
      }
      // Normalize error
      const message = (error.response.data as any)?.message || error.message
      return Promise.reject({ status, message, original: error })
    }
    return Promise.reject({ message: error.message || 'Network error', original: error })
  }
)

export default api
