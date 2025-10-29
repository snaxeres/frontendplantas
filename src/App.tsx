/**
 * App component: define rutas y layout principal
 * Inputs: none
 * Outputs: UI
 */
import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'

export default function App() {
  return <AppRoutes />
}
