// src/features/AprendizajeReactTS/sections/Hooks/UseStateExample.tsx
import  { useState } from 'react'

export default function UseStateExample() {
  const [text, setText] = useState<string>('')
  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} placeholder="escribe..." />
      <div>Valor: {text}</div>
    </div>
  )
}
