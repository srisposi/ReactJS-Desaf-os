import React from 'react'

const Item=({producto}) => {
    return (
        <>
            <div key={producto.id} className='card w-50 mt-2'>
                <div className="card-header">
                    {producto.name}
                </div>
                <div className="card-body">
                    <img src={producto.foto} alt='imagen' className='w-25' />
                </div>
                <div className="card-footer">
                    <buttom className="btn btn-outline-primary">
                        Detalle
                    </buttom>
                </div>
            </div>
        </>
    )
}

export default Item
