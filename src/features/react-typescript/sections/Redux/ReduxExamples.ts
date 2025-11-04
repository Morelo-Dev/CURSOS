// src/features/AprendizajeReactTS/sections/Redux/ReduxExamples.ts
import type { ExampleItem } from '../../data/examples.types'
import ReduxCounterExample from './ReduxCounterExample'
import ReduxTypedActionsExample from './ReduxTypedActionsExample'

export const ReduxExamples: ExampleItem[] = [
  {
    id: 'redux-counter',
    title: 'Redux Toolkit: Counter',
    description: 'Slice tipado con createSlice y uso en componentes.',
    code: `const counterSlice = createSlice({ name:'counter', initialState:{value:0}, reducers:{...} })`,
    component: ReduxCounterExample,
    section: 'Redux',
  },
  {
    id: 'redux-typed-actions',
    title: 'Acciones tipadas',
    description: 'Ejemplo de dispatch tipado en componentes.',
    code: `useDispatch<AppDispatch>()`,
    component: ReduxTypedActionsExample,
    section: 'Redux',
  },
]
