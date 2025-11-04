// src/features/AprendizajeReactTS/sections/Tipado/TipadoExamples.tsx
import TipadoPropsExample from './TipadoPropsExample'
import TipadoStateExample from './TipadoStateExample'
import TipadoGenericsExample from './TipadoGenericsExample'
import type { ExampleItem } from '../../data/examples.types'

export const TipadoExamples: ExampleItem[] = [
  {
    id: 'tipado-props',
    title: 'Props Tipadas',
    description: 'Uso de interfaces para tipar props en componentes funcionales.',
    code: `type Props = { 
  name: string
  age?: number 
}

export default function TipadoPropsExample({ 
  name = 'Alumno', 
  age 
}: Props) {
  return (
    <div>
      <h4>Hola {name}</h4>
      {age && <small>Edad: {age}</small>}
    </div>
  )
}`,
    component: TipadoPropsExample,
    section: 'Tipado',
  },
  {
    id: 'tipado-state',
    title: 'useState Tipado',
    description: 'Contador tipado con useState<number>.',
    code: `import { useState } from 'react'

export default function TipadoStateExample() {
  const [count, setCount] = useState<number>(0)
  
  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Incrementar
      </button>
    </div>
  )
}`,
    component: TipadoStateExample,
    section: 'Tipado',
  },
  {
    id: 'tipado-generics',
    title: 'Componentes Genéricos',
    description: 'Ejemplo de componente genérico List<T>.',
    code: `type ListProps<T> = { 
  items: T[]
  render: (item: T) => React.ReactNode 
}

function List<T>({ items, render }: ListProps<T>) {
  return (
    <ul>
      {items.map((item, i) => (
        <li key={i}>{render(item)}</li>
      ))}
    </ul>
  )
}

export default function TipadoGenericsExample() {
  const numbers = [1, 2, 3, 4, 5]
  
  return (
    <List 
      items={numbers} 
      render={(num) => <strong>{num * 2}</strong>} 
    />
  )
}`,
    component: TipadoGenericsExample,
    section: 'Tipado',
  },
]