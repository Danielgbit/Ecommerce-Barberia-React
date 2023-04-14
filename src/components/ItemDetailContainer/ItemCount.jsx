import { useState, useContext } from "react";
import { CartContext } from "../../Context/CartContext";


const ItemCount = ({ servicio }) => {
  const { cartItems, setCartItems, cantidadTotal, increment, decrement, vaciarCarrito } = useContext(CartContext);
  const { cantidad = 0, nombre, categoria, precio, imagen, id} = servicio;


  const agregarProductosAlCarrito = (cantidad) => {
    const servicioEnCarrito = cartItems.find((item) => item.nombre === nombre);

    if (servicioEnCarrito) {
      setCartItems(
        cartItems.map((item) =>
          item.nombre === nombre ? { ...item, cantidad: item.cantidad + cantidad } : item
        )
      );
    } else {
      setCartItems([...cartItems, { nombre, cantidad, categoria, precio, cantidad, imagen, id }]);
    }
  };



  return (
    <>
      <div className="ContainerCount">
        <button className="botonCount" onClick={decrement}>
          <i className="fa-solid fa-minus"></i>
        </button>
        <span>{cantidadTotal}</span>
        <button className="botonCount" onClick={increment}>
          <i className="fa-solid fa-plus"></i>
        </button>
      </div>
      <div className="ContainerAddVaciar">
        <button onClick={() => agregarProductosAlCarrito(cantidadTotal)}>Agregar</button>
        <button onClick={vaciarCarrito}>Vaciar</button>
      </div>
    </>
  );
};

export default ItemCount;
