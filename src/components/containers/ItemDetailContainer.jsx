import {useEffect,useState} from 'react'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import {useParams} from "react-router-dom"
import { getFirestore } from '../../services/getFirebase'

const ItemDetailContainer = () => {
    const [prod, setProd] = useState({})
    const {idProducto} = useParams()
    const [loading, setLoading] = useState(true)
    const {idCategory} = useParams()

/*     useEffect(()=>{
        getFetchDetail
        .then(resp => setProd(resp))
        .catch(err => console.log(err))
    }, []) */


    useEffect(()=> {

        const dbQuery = getFirestore()

        dbQuery.collection('items').doc('idProducto').get()
        .then(resp => {
            setProd({ id: resp.id, ... resp.data()})
        })
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
    }, [idCategory])   



    console.log(idProducto)
    return (
        <>
            <ItemDetail prod={prod}/>
          hola soy detalle  
        </>
    )
}

export default ItemDetailContainer
