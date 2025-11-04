// src/features/AprendizajeReactTS/sections/Eventos/EventosMouseExample.tsx
import React from 'react'

export default function EventosMouseExample() {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log('clic', e.clientX, e.clientY)
  }
  return <button onClick={handleClick}>Haz clic y abre la consola</button>
}
