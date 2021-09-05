import React from 'react'

export default function ItemListContainer(params) {
  console.log(params)
  return (
    <>
    <h1>{params.titulo}</h1>
    <h2>{params.subtitulo}</h2>  
    <ul>
      <li>Comidas frías</li>
      <li>Plato del día</li>
      <li>A temperatura ambiente</li>
    </ul>
    </>
  )
}
