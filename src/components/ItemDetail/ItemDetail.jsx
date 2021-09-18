import React from 'react'

export const ItemDetail = ({prod}) => {
    return (
        /* Agregar card */
        <div>
            <h2>prod.id</h2>
            <h2>prod.peso</h2>
            <img src={prod.foto} alt="foto" />
        </div>
    )
}

