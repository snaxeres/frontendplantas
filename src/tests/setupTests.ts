import '@testing-library/jest-dom'
// msw setup
import { server } from './server'

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())
