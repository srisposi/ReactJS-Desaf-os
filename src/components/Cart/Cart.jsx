import {useState} from 'react'
// import { ContextApp } from '../../App'
// import { TextComponent4, TextComponent5, TextComponent6, TextComponent7 } from '../../clases/clase11-12/clase11/ComponenteEjemplosCondicionales'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../Context/cartContext'
import { getFirestore } from '../../services/getFirebase'

import firebase from 'firebase'
import 'firebase/firestore'

const Cart = ( {condition = true} ) => {  

    const [ formData, setFormData ] = useState ({
        name: '',
        tel: '',
        email: ''
    })

    const { cartList, vaciarCarrito, deleteFromCart, precioTotal } = useCartContext()

    const handleOnSubmit = (e) => {
        e.preventDefault()
        
        //Creo un objeto vacío
        let orden = {}
        
        //Voy anidando con un punto y creando los campos
        //Hardcodeando la orden del formulario
        orden.buyer = {name: 'Aura', email:'aura@gmail.com', tel: '22231212'}
        orden.date = firebase.firestore.Timestamp.fromDate( new Date());
        orden.total = precioTotal();
        orden.items = cartList.map(cartItem => {
            const id = cartItem.item.id;
            const name = cartItem.item.name;
            const price = cartItem.item.price * cartItem.quantity;
        
            return {id, name, price}
        })

        const db = getFirestore()
        db.collection('orders').add(orden)
        .then(resp => console.log(resp))
        .catch(err => console.log(err))
        

        //Update
        //db.collection('items').doc('8UiMf6jAMcz53aA1CrQX').update({
        //stock: 8    
        //})
        //.then(resp=> alert('se actualizó el stock'))

    }

/*     function handleOnChange(e){
        console.log('agregando los input');
    } */

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

            <button onClick={handleOnSubmit}>Termiar Compra</button> 
        </div>
    )
}

export default Cart
