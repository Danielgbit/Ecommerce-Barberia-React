import React from 'react'
import ItemList from './ItemList'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


const ItemListContainer = () => {

  const [servicios, setServicios] = useState([]);

  const {categoria} = useParams();

  console.log(`categoria: ${categoria}`);

  
  const fetchData = async () => {
    try {
      const response = await fetch("https://raw.githubusercontent.com/Danielgbit/Base-DatosJSON/main/servicios.json");
      const data = await response.json();
      setServicios(data);
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    fetchData();
  }, []);

  const categoriaFilter = servicios.filter((servicio) => servicio.categoria === categoria )

  return (
    <div className='ItemListContainer'>

      { categoria ? <ItemList servicios={categoriaFilter} /> : <ItemList servicios={servicios} />}
      
    </div>
  )
}

export default ItemListContainer