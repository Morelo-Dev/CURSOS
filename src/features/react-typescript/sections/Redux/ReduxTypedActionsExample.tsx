// src/features/AprendizajeReactTS/sections/Redux/ReduxTypedActionsExample.tsx
import { Provider, useDispatch } from 'react-redux'
import { store, type AppDispatch } from './store'
import { set } from './store' // Importa el action creator

function TypedActionsDemo() {
  const dispatch = useDispatch<AppDispatch>()
  return (
    <button onClick={() => dispatch(set(10))}>
      Set 10
    </button>
  )
}

export default function ReduxTypedActionsExample() {
  return (
    <Provider store={store}>
      <TypedActionsDemo />
    </Provider>
  )
}