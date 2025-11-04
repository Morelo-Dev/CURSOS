// src/features/AprendizajeReactTS/sections/Hooks/HooksExamples.tsx
import UseStateExample from './UseStateExample'
import UseEffectExample from './UseEffectExample'
import UseCustomHookExample from './UseCustomHookExample'
import type { ExampleItem } from '../../../data/examples.types'

export const HooksExamples: ExampleItem[] = [
  {
    id: 'hook-usestate',
    title: 'useState Tipado',
    description: 'Ejemplo simple de useState con tipado explícito.',
    code: `const [text, setText] = useState<string>('')`,
    component: UseStateExample,
    section: 'Hooks',
  },
  {
    id: 'hook-useeffect',
    title: 'useEffect básico',
    description: 'Contador de segundos con useEffect.',
    code: `useEffect(() => { const t = setInterval(()=>setTime(t=>t+1),1000); return ()=>clearInterval(t) }, [])`,
    component: UseEffectExample,
    section: 'Hooks',
  },
  {
    id: 'hook-custom',
    title: 'Hook personalizado useFetch',
    description: 'Consumo tipado de una API con hook reutilizable.',
    code: `function useFetch<T>(url: string){ ... }`,
    component: UseCustomHookExample,
    section: 'Hooks',
  },
]
