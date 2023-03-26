import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({nombre, categoria, cantidad, id, img}) => {


  
  return (
    <>
      <div className='ContainerCatalogo'>
        <div  className='CartCatalogo'>
          <img src={`${img}`} alt='' />
          <h2 className='NombreItem' >{nombre}</h2>
          <p className='CategoriaCatalogo'>Categoria: {categoria}</p>
          <p className='StockCatalogo'>Stock: {cantidad}</p>
          <Link to={`/detalle/${id}`}><button className='Detalle'>Detalle</button></Link>
        </div>
      
    </div>
    </>
  )
}

export default Item