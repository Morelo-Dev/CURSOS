// src/features/AprendizajeReactTS/sections/Eventos/EventosExamples.tsx
import type { ExampleItem } from '../../data/examples.types'
import EventosFormExample from './EventosFormExample'
import EventosMouseExample from './EventosMouseExample'

export const EventosExamples: ExampleItem[] = [
  {
    id: 'evento-form',
    title: 'Evento de formulario',
    description: 'Formulario controlado con tipos de evento.',
    code: `const handleSubmit = (e: React.FormEvent) => { e.preventDefault() }`,
    component: EventosFormExample,
    section: 'Eventos',
  },
  {
    id: 'evento-mouse',
    title: 'Evento de mouse',
    description: 'Uso de React.MouseEvent en handlers.',
    code: `const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => { console.log(e.clientX) }`,
    component: EventosMouseExample,
    section: 'Eventos',
  },
]
