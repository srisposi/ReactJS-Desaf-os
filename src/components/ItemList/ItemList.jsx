import React from 'react'
import Item from './Item'

function ItemList({productos}) {
    return (
        <>
           <ul>
                { productos.map((producto)=>  <Item producto={producto} />  )  }
            </ul>   
        </>
    )
}

export default ItemList
