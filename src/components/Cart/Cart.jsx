// import {useState} from 'react'
// import { ContextApp } from '../../App'
// import { TextComponent4, TextComponent5, TextComponent6, TextComponent7 } from '../../clases/clase11-12/clase11/ComponenteEjemplosCondicionales'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../Context/cartContext'


const Cart = ( {condition = true} ) => {  

    //const useContextApp = useContext(ContextApp)
    const { cartList, vaciarCarrito, deleteFromCart } = useCartContext()
    
    // if ( !condition) {
    //         return <h2>No puede ver cart</h2>;
    // }
        
    // condition ? : => if else
    // condition && 
    // condition ||
    console.log(cartList)
    return (
        <div>
            <h1>Hola soy Cart</h1> 


            {cartList.length === 0  ?   
                <div>
                    <h1>No hay productos agregue algunos</h1>
                    <Link to='/' >Ir a Comprar</Link>
                </div>
            : 
                <div>
                    {cartList.map(resp => <div key={resp.item.id}>
                        <h2>{resp.item.name}</h2>
                        <button onClick={()=> deleteFromCart(resp)} > X </button>
                    </div>
                    )}
                    <button onClick={() => vaciarCarrito()} >Vaciar Carrito</button>
                </div>
            }
        </div>
    )
}

export default Cart
