import React from 'react'

export const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (props) => (
  <button {...props} className={(props.className || '') + ' px-3 py-2 rounded'} />
)
