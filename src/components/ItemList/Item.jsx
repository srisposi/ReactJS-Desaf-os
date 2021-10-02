import React from 'react'
import {Link} from "react-router-dom"

const Item=({producto}) => {
    return (
        <>
            <div key={producto.id} className='card w-50 mt-2'>
                <div className="card-header">
                    {producto.name}
                </div>
                <div className="card-body">
                    <img src={producto.image} alt='imagen' className='w-25' />
                </div>
                <div className="card-footer">
                    <Link to={`/detalle/${producto.id}`}>
                        <buttom className="btn btn-outline-primary">
                            Detalle del producto
                        </buttom>
                    </Link>

                    
                </div>
            </div>
        </>
    )
}

export default Item
