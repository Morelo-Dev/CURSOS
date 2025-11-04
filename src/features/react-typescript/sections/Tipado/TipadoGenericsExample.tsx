// src/features/AprendizajeReactTS/sections/Tipado/TipadoGenericsExample.tsx
import React from 'react'

type ListProps<T> = { items: T[]; render: (item: T) => React.ReactNode }

function List<T>({ items, render }: ListProps<T>) {
  return <ul>{items.map((it, i) => <li key={i}>{render(it)}</li>)}</ul>
}

export default function TipadoGenericsExample() {
  return (
    <div>
      <List items={['uno','dos','tres']} render={(s) => <b>{s}</b>} />
    </div>
  )
}
