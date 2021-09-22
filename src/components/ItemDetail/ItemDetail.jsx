import React from 'react'
import {useState} from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount'

const ItemDetail = ({prod}) => {
    const [cambiarBoton, setCambiarBoton] = useState(true)
    
    const onAdd=(cant)=>{
        console.log(cant)
        setCambiarBoton(false)
    }

    return (
        /* Agregar card */
        <>
            <h2>prod.id</h2>
            <h2>prod.peso</h2>
            <img src={prod.foto} alt="foto" />
            {
                cambiarBoton ?
                    <ItemCount initial={1} stock={5} onAdd={onAdd} />
                    :
                    <Link to="/cart">
                        <button>Terminar Compra</button>
                    </Link>
                }
        
        </>
    )
}

export default ItemDetail