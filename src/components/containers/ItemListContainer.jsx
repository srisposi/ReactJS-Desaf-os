import {useState, useEffect} from 'react'
import { useParams } from 'react-router'
import {Input} from '../../clases/Input';
import ItemList from '../ItemList/ItemList'
import { getFirebase } from '../../services/getFirebase';

export default function ItemListContainer({greeting}) {
    const [producto, setProducto] = useState([])

    const [loading, setLoading] = useState(true)
    const {idCategory} = useParams()

/*      useEffect(() => {
        getFetch
        .then(res=>{
            setProducto(res)
            setLoading(false)
        })
    }, [])
    console.log(producto);
    console.log(loading);   */
    
       useEffect(() => {

        const dbQuery = getFirebase()
        
//      dbQuery.collection('items').where('category', '==', 'idCategory').get()
//      dbQuery.collection('items').where('category', '==', 'idCategory').limit(1).get()
        dbQuery.collection('items').get()
        .then(resp => {
            setProducto(resp.docs.map(item => ({id: item.id, ...item.data()}) ) )
        })
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
        
    }, [idCategory])
    
    console.log(producto)
    //console.log(idCategory);     
    
    return (
        <div>
            <Input />
            <h1>{greeting}</h1>
            { loading ? <h2>Cargando ...</h2> : <ItemList productos={producto} /> }
        </div>
    )         
} 


