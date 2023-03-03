import React from 'react'

const CartWidget = () => {

const total = 5

  return (
    <>
    <div className='containerCart'>

        <a href=""><span className="material-symbols-outlined">
          local_mall
        </span></a>
        <p>{total}</p>

    </div>
    </>
  )
}

export default CartWidget