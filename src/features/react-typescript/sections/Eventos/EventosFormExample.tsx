// src/features/AprendizajeReactTS/sections/Eventos/EventosFormExample.tsx
import React, { useState } from 'react'

export default function EventosFormExample() {
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`enviado: ${name} - ${email}`)
  }
  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="nombre" />
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" />
      <button type="submit">Enviar</button>
    </form>
  )
}
