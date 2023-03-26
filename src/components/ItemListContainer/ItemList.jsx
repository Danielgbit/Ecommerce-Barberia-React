import React from 'react'
import Item from './Item'

const ItemList = ({servicios}) => {

  return (

    servicios.map((servicio) => 
    (<Item 
      key={servicio.id} 
      nombre={servicio.nombre}
      categoria={servicio.categoria}
      cantidad={servicio.cantidad}
      id={servicio.id}
      img={servicio.imagen}
      />))
  )
}

export default ItemList