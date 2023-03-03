

import React from 'react'

const ItemListContainer = ({saludo, estado}) => {

  return (
    <>
        <h2 className='containerItemList'>{saludo}, estamos en {estado}...</h2>
    </>
  )
}

export default ItemListContainer