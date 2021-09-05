import React from 'react'

export default function ItemListContainer({titulo, subtitulo}) {
  return (
    <>
    <h1>{titulo}</h1>
    <h2>{subtitulo}</h2>  
    <ul>
      <li>Comidas frías</li>
      <li>Plato del día</li>
      <li>A temperatura ambiente</li>
    </ul>
    </>
  )
}
