// src/features/AprendizajeReactTS/sections/Tipado/TipadoStateExample.tsx
import  { useState } from 'react'

export default function TipadoStateExample() {
  const [count, setCount] = useState<number>(0)
  return (
    <div>
      <div>Contador: {count}</div>
      <div style={{display:'flex',gap:8}}>
        <button onClick={() => setCount(c => c + 1)}>+</button>
        <button onClick={() => setCount(c => c - 1)}>-</button>
      </div>
    </div>
  )
}
