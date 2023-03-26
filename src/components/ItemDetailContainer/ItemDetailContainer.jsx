import React from 'react'
import { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {

  const [servicios, setServicios] = useState([]);
 
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

  return (
    <>
        <ItemDetail servicios={servicios} />
    </>
  )
}

export default ItemDetailContainer