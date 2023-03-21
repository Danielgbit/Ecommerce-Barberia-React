const ItemCount = ({nombre, precio, categoria, cantidad, id }) => {
  const [contador, setContador] = useState(0);

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
      <div className="ContainerProducts">
        <div className="Card">
          <h1>{nombre}</h1>
          <p>ID: {id}</p>
          <img src="src\img\pexels-adrien-olichon-2387819.jpg" alt="" />
          <p className="Categoria">Categoria: {categoria}</p>
          <p>$ {precio}</p>
          <div className="ContainerCount">
            <button className="botonCount" onClick={decrement}><i className="fa-solid fa-minus"></i></button>
            <span>{contador}</span>
            <button className="botonCount"  onClick={increment}><i className="fa-solid fa-plus"></i></button>
          </div>
          <div className="ContainerAddVaciar">
            <button onClick={() => setContador(0)}>Vaciar</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ItemCount