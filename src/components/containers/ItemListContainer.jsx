import {useState, useEffect} from 'react'
import { useParams } from 'react-router'
import { getFetch } from '../../utils/Mock'
import {Input} from '../../clases/Input';
import ItemList from '../ItemList/ItemList'
import ItemCount from '../ItemCount'

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
        if (idCategory){
            getFetch
            .then(respuesta =>{
                setProducto(respuesta.filter(prod = prod.category === idCategory))
            })
            .catch(error => console.log(error))
            .finally(()=> setLoading(false))   
        } else {
            getFetch
            .then(respuesta =>{
                setProducto(respuesta)
            })
            .catch(error=> console.log(error))
            .finally(() => setLoading(false))
        }
    }, [idCategory])
    console.log(idCategory);     
    
    return (
        <div>
            <Input />
            <h1>{greeting}</h1>
            { loading ? <h2>Cargando ...</h2> : <ItemList productos={producto} /> }
        </div>
    )         
} 


