import { createContext, useContext, useState } from "react";

const CartContext = createContext()

export const CartContextUse = () => {
    return useContext(CartContext)
}

export const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const addItem = (item, quantity) => {
        if(isInCart(item.id)){
            const UpdateQty = [...cart];
            
            UpdateQty.map(element => {
                if(element.item.id === item.id){
                    element.quantity += quantity
                }
            })
            setCart(UpdateQty)
            //console.log("El producto esta en el carrito")
        } else {
            setCart([...cart, {item, quantity}])
        }
    }

    const isInCart = (id) => cart.find(element => element.item.id === id)
    
    const clear = () => setCart([])

    const removeItem = (id) => {
        const cartFilter = cart.filter(element => element.item.id !== id)
        
        setCart(cartFilter)
    } 

    console.log('carrito', cart)
    return (
        <CartContext.Provider value={{cart, addItem, clear, removeItem}}>
            {children}
        </CartContext.Provider>
    )
}