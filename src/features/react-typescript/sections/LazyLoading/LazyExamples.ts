// src/features/AprendizajeReactTS/sections/LazyLoading/LazyExamples.ts
import LazyImageExample from './LazyImageExample'
import IntersectionExample from './IntersectionExample'
import type { ExampleItem } from '../../data/examples.types'

export const LazyExamples: ExampleItem[] = [
  {
    id: 'lazy-image',
    title: 'Lazy Image con IntersectionObserver',
    description: 'Carga diferida de imágenes usando IntersectionObserver.',
    code: `useEffect(()=>{ const io = new IntersectionObserver(...) },[])`,
    component: LazyImageExample,
    section: 'LazyLoading',
  },
  {
    id: 'lazy-intersection',
    title: 'IntersectionObserver básico',
    description: 'Observer detectando visibilidad de un elemento.',
    code: `const io = new IntersectionObserver((entries)=>{ if(entries[0].isIntersecting) ... })`,
    component: IntersectionExample,
    section: 'LazyLoading',
  },
]
