import React from 'react'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom';
import { useState } from 'react';

const NavBar = () => {

  const [showSubMenu, setShowSubMenu] = useState(false);
  

  const handleSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  };

  return (
    <>

        <nav className='containerNav'>

              <div className='NameCart'>
              <Link to='/'>
                <h1>Mandala</h1>
              </Link>
              <CartWidget/>
            </div>

          <div className='Navlinks' >
              <ul>
                  <li ><Link to='/'>Inicio</Link></li>
                  <li ><Link to='/catalogo'>Catálogo</Link></li>
                  <li className='Categorias' ><Link to='#' onClick={handleSubMenu}>Categorías <i className="fa-solid fa-arrow-down"></i></Link>
                    {showSubMenu && (
                      <ul className='ContainerSubEnlaces'>
                        <li ><Link className='SubEnlaces'to='/categorias/Corte-de-cabello'>Corte de cabello</Link></li>
                        <li ><Link className='SubEnlaces'to='/categorias/afeitado'>Afeitado</Link></li>
                        <li ><Link className='SubEnlaces'to='/categorias/peinado'>Peinado</Link></li>
                        <li ><Link className='SubEnlaces'to='/categorias/productos-de-cabello'>Productos de cabello</Link></li>
                      </ul>
                    )}
                  </li>
              </ul>
          </div>
          <img src="src\img\Menu.png" alt="Menu Navegacion" className='MainNav' />
        </nav>
    </>
  )
}

export default NavBar