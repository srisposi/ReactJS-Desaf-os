import React from 'react'
import {useState} from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount'
import { CartContextUse } from '../../Context/CartContext'

const ItemDetail = ({prod}) => {
/*     const [cambiarBoton, setCambiarBoton] = useState(true)
 */    const {addItem, clear, removeItem, cart} = CartContextUse();    

/*     const onAdd=(cant)=>{
        console.log(cant)
        setCambiarBoton(false)
    } */
    const onAdd = (qty) => {
        addItem(prod, qty)
    }
    
    

    return (
        /* Agregar card */
        <div>
            <h2>prod.id</h2>
            <h2>prod.peso</h2>
            <img src={prod.foto} alt="foto" />
            <ItemCount onAdd={onAdd}/>
            <button onClick={clear}>Botón limpiar</button>
            {cart.map(element => {
                return (
                    <>
                        {element.item.name}
                        <button onClick={() => removeItem (element.item.id)}>Quitar item</button>
                    </>
                )
            })}
        </div>
    );
}

export default ItemDetail