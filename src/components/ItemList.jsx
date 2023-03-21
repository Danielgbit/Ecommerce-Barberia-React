const ItemList = ({ servicios, categoria }) => {
  const serviciosFiltrados = servicios.filter((servicio) => servicio.categoria === categoria);

  return (
    <div className='ContainerCatalogo'>
      {serviciosFiltrados.map((servicio) => (
        <div key={servicio.id} className='CartCatalogo'>
          <img src='src\img\pexels-adrien-olichon-2387819.jpg' alt='' />
          <h2>{servicio.nombre}</h2>
          <p className='CategoriaCatalogo'>Categoria: {servicio.categoria}</p>
          <p className='StockCatalogo'>Stock: {servicio.cantidad}</p>
          <Link to={`/detalle/${servicio.id}`}>
            <button className='Detalle'>Detalle</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ItemList;