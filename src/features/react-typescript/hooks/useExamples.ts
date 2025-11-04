// src/features/AprendizajeReactTS/hooks/useExamples.ts
import { useMemo } from 'react'
import { examples } from '../data/examples'
import type { ExampleItem, SectionKey } from '../data/examples.types'

export const useExamples = () => {
  const all = useMemo<ExampleItem[]>(() => examples, [])
  const getBySection = (section: SectionKey) => all.filter(e => e.section === section)
  return { examples: all, getBySection }
}
