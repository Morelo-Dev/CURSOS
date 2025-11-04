// src/features/AprendizajeReactTS/sections/LazyLoading/IntersectionExample.tsx
import  { useRef, useEffect, useState } from 'react'

export default function IntersectionExample() {
  const ref = useRef<HTMLDivElement | null>(null)
  const [seen, setSeen] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setSeen(true)
    })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return <div ref={ref} style={{height:100,background: seen ? '#c8f7c5' : '#eee'}}>Intersection observed: {String(seen)}</div>
}
