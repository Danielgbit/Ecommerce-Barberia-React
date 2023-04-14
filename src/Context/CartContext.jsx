import { createContext } from 'react';
export const CartContext = createContext();
import { useState } from "react"


export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cantidadTotal, setCantidadTotal] = useState(0);




  const increment = () => {
    setCantidadTotal(cantidadTotal + 1);
  };

  const decrement = () => {
    if (cantidadTotal > 0) {
      setCantidadTotal(cantidadTotal - 1);
    }
  };

  const vaciarCarrito = () => {
    setCartItems([]);
    setCantidadTotal(0);
  };


  const decrementCart = (itemNombre) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.nombre === itemNombre) {
        return {
          ...item,
          cantidad: item.cantidad > 0 ? item.cantidad - 1 : 0,
        };
      } else {
        return item;
      }
    });

    const filteredCartItems = updatedCartItems.filter(
      (item) => item.cantidad > 0
    );
    setCartItems(filteredCartItems);
  };






  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        cantidadTotal,
        setCantidadTotal,
        increment,
        decrement,
        vaciarCarrito,
        decrementCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
