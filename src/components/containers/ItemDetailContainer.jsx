import {useEffect,useState} from 'react'
import { getFetchDetail } from '../../utils/getMock'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import {useParams} from "react-router-dom"

const ItemDetailContainer = () => {
    const [prod, setProd] = useState({})
    const {idProducto} = useParams()

    useEffect(()=>{
        getFetchDetail
        .then(resp => setProd(resp))
        .catch(err => console.log(err))
    }, [])

    console.log(idProducto)
    return (
        <>
            <ItemDetail prod={prod}/>
          hola soy detalle  
        </>
    )
}

export default ItemDetailContainer
