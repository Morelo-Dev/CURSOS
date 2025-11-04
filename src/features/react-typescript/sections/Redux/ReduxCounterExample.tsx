// src/features/AprendizajeReactTS/sections/Redux/ReduxCounterExample.tsx
import { Provider, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from './store'
import { store } from './store' // Importa tu store

function Counter() {
  const count = useSelector((s: RootState) => s.counter.value)
  const dispatch = useDispatch<AppDispatch>()
  return (
    <div>
      <div>Contador global: {count}</div>
      <div style={{display:'flex',gap:8}}>
        <button onClick={() => dispatch({ type: 'counter/increment' })}>+</button>
        <button onClick={() => dispatch({ type: 'counter/decrement' })}>-</button>
      </div>
    </div>
  )
}

export default function ReduxCounterExample() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  )
}