import { useState } from "react";


const ItemCount = ({servicio}) => {

console.log(`ItemCount: ${servicio}`)

  const {cantidad} = servicio;

  const [contador, setContador] = useState(0);


  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (contador) => {
    // Verificar si el servicio ya está en el carrito
    const index = carrito.findIndex(item => item.servicio.id === servicio.id);
    if (index === -1) {
      // El servicio no está en el carrito, agregarlo
      setCarrito([...carrito, {servicio: servicio, cantidad: contador}]);
    } else {
      // El servicio ya está en el carrito, sumar cantidad
      const newCarrito = [...carrito];
      newCarrito[index].cantidad += contador;
      setCarrito(newCarrito);
    }
    // Reiniciar contador
    setContador(0);
  };

  const increment = () => {
    if (contador < cantidad) {
      setContador(contador + 1);
    } else {
      alert("Ya no hay inventario disponible");
    }
  };

  const decrement = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  return (
    <>
          <div className="ContainerCount">
            <button className="botonCount" onClick={decrement}><i className="fa-solid fa-minus"></i></button>
            <span>{contador}</span>
            <button className="botonCount"  onClick={increment}><i className="fa-solid fa-plus"></i></button>
            
          </div>
          <div className="ContainerAddVaciar">
          <button onClick={() => agregarAlCarrito(contador)}>Agregar</button>
            <button onClick={() => setContador(0)}>Vaciar</button>
          </div>
    </>
  )
}

export default ItemCount