import { useState } from "react";
import {Link} from 'react-router-dom'

const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial)
    const [cambiarBoton, setCambiarBoton] = useState(true)

    function sumar(){
        if(count<stock){
            setCount(count + 1)
        }
    }

    function restar(){
        if(count>1) {
            setCount(count - 1)
        }
    }

    const agregarCarrito=()=>{
        onAdd(count)
        setCambiarBoton(false)
    }

    return(
        <div>
            <h3>Item Count</h3>
            <button onClick={sumar}>+</button>
            <label>{count}</label>
            <button onClick={restar}>-</button>

            {cambiarBoton ? 
                <button onClick={agregarCarrito}> Agregar al carrito</button>        
            : 
            <div>
                <Link to="/cart">
                    <button> Terminar Compra</button>
                </Link>
                <Link to="/">
                    <button> Seguir Comprando</button>
                </Link>
            </div>
             }
        </div>
    )
}

export default ItemCount