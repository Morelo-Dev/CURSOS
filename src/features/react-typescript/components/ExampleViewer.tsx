// src/features/AprendizajeReactTS/components/ExampleViewer.tsx
import '../styles/codeblock.css'
import type { ExampleItem } from '../data/examples.types'

type Props = {
  example?: ExampleItem | null
}

export default function ExampleViewer({ example }: Props) {
  if (!example) return <div className="example-empty">Selecciona un ejemplo</div>
  const Component = example.component
  return (
    <section className="example-viewer">
      <header className="example-header">
        <h2>{example.title}</h2>
        <p>{example.description}</p>
      </header>
      <article className="example-run">
        <Component />
      </article>
   
    </section>
  )
}
