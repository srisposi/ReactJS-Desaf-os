import {useState, useEffect} from 'react'
import { getFetch } from '../../utils/Mock'
import ItemList from '../ItemList/ItemList'


function ItemListContainer(greeting, onAdd) {
    const [producto, setProducto] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getFetch
        .then(res=>{
            setProducto(res)
            setLoading(false)
        })
    }, [])
    console.log(producto);
    console.log(loading); 
    return (
        <div>
            <h1>{greeting}</h1>
            { loading ?
                <h2>Cargando ...</h2>
                :
                <ItemList personas={producto} /> 
            }
        </div>
    )
}

export default ItemListContainer
