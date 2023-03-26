import React from 'react'
import { useParams } from 'react-router-dom'
import ItemCount from './ItemCount'



const ItemDetail = ({servicios}) => {

  const {id} = useParams()

  const filterId = servicios.filter((servicio) =>  servicio.id == id)

  console.log(`${id}`)

  return (
    <>

  {filterId.map((servicio) => (  
        <div key={servicio.id} className="ContainerProducts">
        <div className="Card">
          <h1>{servicio.nombre}</h1>
          <img src={`${servicio.imagen}`} alt="" />
          <p className="Categoria">Categoria: {servicio.categoria}</p>
          <p>$ {servicio.precio}</p>
          <ItemCount servicio={servicio}/>
        </div>
      </div>))

      }

    </>


  )
}

export default ItemDetail