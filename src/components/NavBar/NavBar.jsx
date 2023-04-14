import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import CartWidget from '../CartContainer/CartWidget';

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
                <h1 className='TitleNavMandala'>Mandala</h1>
              </Link>
                <CartWidget/>
            </div>

          <div className='Navlinks' >
              <ul>
                  <li ><Link to='/'>Inicio</Link></li>
                  <li ><Link to='/catalogo'>Catálogo</Link></li>
                  <li className='Categorias'><Link to='#' onClick={handleSubMenu}>Categorías <i className="fa-solid fa-arrow-down"></i></Link>
                    {showSubMenu && (
                      <ul className='ContainerSubEnlaces'>
                        <li ><Link className='SubEnlaces' to={`/categorias/${"Corte"}`} >Corte</Link></li>
                        <li ><Link className='SubEnlaces' to={`/categorias/${"Afeitado"}`} >Afeitado</Link></li>
                        <li ><Link className='SubEnlaces' to={`/categorias/${"Peinado"}`} >Peinado</Link></li>
                        <li ><Link className='SubEnlaces' to={`/categorias/${"Productos"}`} >Productos</Link></li>
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