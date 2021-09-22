import { useState } from "react";
import {Link} from 'react-router-dom'

const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial)

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
    }

    return(
        <div>
            <h3>Item Count</h3>
            <button onClick={sumar}>+</button>
            <label>{count}</label>
            <button onClick={restar}>-</button>
            <button onClick={agregarCarrito}> Agregar al carrito</button>

        </div>
    )
}

export default ItemCount