// src/features/AprendizajeReactTS/data/examples.ts
import { EventosExamples } from '../sections/Eventos/_export'
import { LazyExamples } from '../sections/LazyLoading/_export'
import { ReduxExamples } from '../sections/Redux/_export'
import { TipadoExamples } from '../sections/Tipado/_export'
import { HooksExamples } from '../sections/Tipado/Hooks/_export'
import type { ExampleItem } from './examples.types'

export const examples: ExampleItem[] = [
  ...TipadoExamples,
  ...HooksExamples,
  ...EventosExamples,
  ...LazyExamples,
  ...ReduxExamples,
]
