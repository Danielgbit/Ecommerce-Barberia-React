import React from 'react'
import ItemList from './ItemList'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ItemListContainer = () => {

  const [servicios, setServicios] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');

  useEffect(() => {
    fetch("./servicios.json")
      .then((response) => response.json())
      .then((data) => setServicios(data));
  }, []);

  return (
    <div className='ItemListContainer'>
      {servicios
        .filter((servicio) => !categoriaSeleccionada || servicio.categoria === categoriaSeleccionada)
        .map((servicio) => (
          <Link to={`/detalle/${servicio.id}`} key={servicio.id}>
            <ItemList
              id={servicio.id}
              nombre={servicio.nombre}
              categoria={servicio.categoria}
              precio={servicio.precio}
              cantidad={servicio.cantidad}
            />
          </Link>
        ))}
    </div>
  )
}

export default ItemListContainer