// src/features/AprendizajeReactTS/sections/LazyLoading/LazyImageExample.tsx
import  { useRef, useState, useEffect } from 'react'

export default function LazyImageExample() {
  const ref = useRef<HTMLImageElement | null>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) setVisible(true) })
    }, { threshold: 0.1 })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return (
    <div style={{minHeight:200}}>
      <img
        ref={ref}
        alt="demo"
        src={visible ? 'https://loremflickr.com/400/200/cat' : ''}
        style={{width:'100%',height:'auto',background:'#f0f0f0'}}
      />
    </div>
  )
}
