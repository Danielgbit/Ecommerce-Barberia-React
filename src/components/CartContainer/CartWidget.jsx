import React from "react";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { useNavigate } from 'react-router-dom';




const CartWidget = () => {
  const navigate = useNavigate();


  const paginaCarrito = () => {
    navigate('./Cart');
  }

  const { cartItems } = useContext(CartContext);


  const cantidadServiciosEnCarrito = cartItems.reduce((total, servicio) => total + servicio.cantidad, 0);


  return (
    <>
      <div className="containerCart" onClick={paginaCarrito}>
        <a href="#">
          <span className="material-symbols-outlined">local_mall
          {cartItems.length > 0 && <p className="CantidadTotal">{cantidadServiciosEnCarrito}</p>}
          </span>
        </a>
      </div>
    </>
  );
};

export default CartWidget;
