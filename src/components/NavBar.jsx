import React from 'react'
import CartWidget from './CartWidget'

const NavBar = () => {

  return (
    <>

    <header>
        <nav className='containerNav'>

            <div className='NameCart'>
                <a href="#"><h1>Mandala</h1></a>
                <CartWidget/>
            </div>

          <div className='Navlinks' >
              <ul>
                  <li><a className='Home' href="#">Inicio</a></li>
                  <li><a href="#">Servicios</a></li>
                  <li><a href="#">Productos</a></li>
                  <li><a href="#">Nosotros</a></li>
              </ul>
          </div>
          <img src="src\img\Menu.png" alt="Menu Navegacion" className='MainNav' />
        </nav>
    </header>

        
    </>
  )
}

export default NavBar