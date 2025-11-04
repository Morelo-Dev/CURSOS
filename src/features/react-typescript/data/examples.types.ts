// src/features/AprendizajeReactTS/data/examples.types.ts
import React from 'react'

export type SectionKey = 'Tipado' | 'Hooks' | 'Eventos' | 'LazyLoading' | 'Redux'

export interface ExampleItem {
  id: string
  title: string
  description: string
  code: string
  component: React.FC<any>
  section: SectionKey
}
