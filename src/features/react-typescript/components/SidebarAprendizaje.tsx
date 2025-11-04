import './../styles/sidebar.css'
import type { ExampleItem } from '../data/examples.types'
import { useState } from 'react'

type Props = {
  sections: string[]
  examples: ExampleItem[]
  onSelect: (section: string) => void
  onSelectExample: (id: string) => void
  activeId?: string
}

export default function SidebarAprendizaje({ sections, examples, onSelect, onSelectExample, activeId }: Props) {
  const [activeSection, setActiveSection] = useState<string>(sections[0])

  const handleSelectSection = (section: string) => {
    setActiveSection(section)
    onSelect(section)
  }

  // Agrupar ejemplos por sección
  const groupedExamples: Record<string, ExampleItem[]> = sections.reduce((acc, section) => {
    acc[section] = examples.filter(e =>
      e.section.replace(/\s/g, '').toLowerCase() === section.replace(/\s/g, '').toLowerCase()
    )
    return acc
  }, {} as Record<string, ExampleItem[]>)

  return (
    <aside className="apr-sidebar">
      <nav className="apr-sections">
        {sections.map(s => (
          <button
            key={s}
            className={`apr-section-btn apr-section-${s.replace(/\s/g, '').toLowerCase()}${activeSection === s ? ' active' : ''}`}
            onClick={() => handleSelectSection(s)}
          >
            {s}
          </button>
        ))}
      </nav>
      <div className="apr-examples-groups">
        <div className="apr-examples-divider" />
        {sections.map(section => (
          <div
            key={section}
            className={`apr-examples-list apr-examples-${section.replace(/\s/g, '').toLowerCase()}`}
          >
            {groupedExamples[section].map(e => (
              <button
                key={e.id}
                className={`apr-example-btn${e.id === activeId ? ' active' : ''}`}
                onClick={() => {
                  setActiveSection(section)
                  onSelect(section)
                  onSelectExample(e.id)
                }}
              >
                {e.title}
              </button>
            ))}
          </div>
        ))}
      </div>
    </aside>
  )
}