// src/features/AprendizajeReactTS/sections/Tipado/TipadoPropsExample.tsx

type Props = { name: string; age?: number }

export default function TipadoPropsExample({ name = 'Alumno', age = 25}: Props) {
  return (
    <div>
      <h4>Hola {name}</h4>
      {age && <small>Edad: {age}</small>}
    </div>
  )
}
