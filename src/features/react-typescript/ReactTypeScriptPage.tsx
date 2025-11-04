import './styles/aprendizaje.css'
import CodeBlock from './components/CodeBlock'
import ExampleViewer from './components/ExampleViewer'
import SidebarAprendizaje from './components/SidebarAprendizaje'
import type { SectionKey } from './data/examples.types'
import { useActiveExample } from './hooks/useActiveExample'
import { useExamples } from './hooks/useExamples'

export default function ReactTypeScriptPage() {
  const { examples, getBySection } = useExamples()
  const { activeId, setActiveId, activeExample } = useActiveExample(examples[0]?.id ?? '')
  
  const sections = ['Tipado','Hooks','Eventos','LazyLoading','Redux'] as const
  
  return (
    <div className="aprendizaje-root">
      <SidebarAprendizaje
        sections={[...sections]} // Convierte readonly a mutable array
        examples={examples}
        onSelect={(section) => {
          const ex = getBySection(section as SectionKey)[0]
          if (ex) setActiveId(ex.id)
        }}
        onSelectExample={(id) => setActiveId(id)}
        activeId={activeId}
      />
      <div className="aprendizaje-main">
        <ExampleViewer example={activeExample} />
      </div>
      <div className="aprendizaje-code">
        <CodeBlock code={activeExample?.code ?? ''} visible={Boolean(activeExample)} />
      </div>
    </div>
  )
}