// src/features/AprendizajeReactTS/hooks/useActiveExample.ts
import { useState, useMemo } from 'react'
import { examples } from '../data/examples'
import type { ExampleItem } from '../data/examples.types'

export const useActiveExample = (initialId?: string) => {
  const [activeId, setActiveId] = useState<string>(initialId ?? examples[0]?.id ?? '')
  const activeExample: ExampleItem | undefined = useMemo(
    () => examples.find(e => e.id === activeId),
    [activeId]
  )
  return { activeId, setActiveId, activeExample }
}
