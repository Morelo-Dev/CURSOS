// src/features/AprendizajeReactTS/sections/Hooks/UseEffectExample.tsx
import  { useEffect, useState } from 'react'

export default function UseEffectExample() {
  const [time, setTime] = useState<number>(0)
  useEffect(() => {
    const t = setInterval(() => setTime(t => t + 1), 1000)
    return () => clearInterval(t)
  }, [])
  return <div>Segundos desde mount: {time}</div>
}
