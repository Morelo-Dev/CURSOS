// src/features/AprendizajeReactTS/sections/Hooks/UseCustomHookExample.tsx

import useFetch from "./useFetch";

function RepoList() {
  const { data } = useFetch<{ id: number; name: string }[]>('https://api.github.com/users/octocat/repos')
  if (!data) return <div>Cargando repos...</div>
  return <ul>{data.slice(0,5).map(r => <li key={r.id}>{r.name}</li>)}</ul>
}

export default function UseCustomHookExample() {
  return <RepoList />
}
