// src/features/AprendizajeReactTS/sections/Hooks/useFetch.ts
import { useEffect, useState } from 'react'

export default function useFetch<T = unknown>(url?: string) {
  const [data, setData] = useState<T | null>(null)
  useEffect(() => {
    if (!url) return
    let cancelled = false
    fetch(url)
      .then(r => r.json())
      .then(json => { if (!cancelled) setData(json) })
    return () => { cancelled = true }
  }, [url])
  return { data }
}
