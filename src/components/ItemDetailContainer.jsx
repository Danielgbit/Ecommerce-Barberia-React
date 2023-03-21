
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  const [servicios, setServicios] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch("./servicios.json")
      .then((response) => response.json())
      .then((data) => setServicios(data));
  }, []);

  const servicio = servicios.find((s) => s.id === parseInt(id));

  return (
    <>
              <Link to={`/detalle/${servicio.id}`} key={servicio.id}>
                <ItemList 
                  id={servicio.id} 
                  nombre={servicio.nombre} 
                  categoria={servicio.categoria} 
                  precio={servicio.precio} 
                  cantidad={servicio.cantidad}
                />
              </Link>
    </>
  );
};

export default ItemDetailContainer;