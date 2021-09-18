import {useEffect,useState} from 'react'
import { getFetchDetail } from '../../utils/getMock'
import { ItemDetail } from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
    const [prod, setProd] = useState({})

    useEffect(()=>{
        getFetchDetail
        .then(resp => setProd(resp))
        .catch(err => console.log(err))
    }, [])

    return (
        <>
            <ItemDetail prod={prod}/>
          hola soy detalle  
        </>
    )
}

export default ItemDetailContainer
