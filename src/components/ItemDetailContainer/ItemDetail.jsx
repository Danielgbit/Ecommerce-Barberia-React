import React from "react";
import { useParams } from "react-router-dom";
import ItemCount from "./ItemCount";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useState, useEffect } from "react";





const ItemDetail = () => {
  const { id } = useParams();
  const [servicio, setServicio] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const baseDatos = getFirestore();
    const oneItem = doc(baseDatos, "servicios", `${id}`);
    
    getDoc(oneItem).then((snapshot) => {
      if (snapshot.exists()) {
        const serviciosId = { ...snapshot.data(), id: snapshot.id };
        setServicio([serviciosId]);
      }
      setIsLoading(false);
    });
  }, [id]);
  


  return (
    <div className="ContainerProducts">
      {isLoading ? (
        <div className="ContainerSpinner">
          <div className="spinner"></div>
        </div>
      ) : (
        servicio.map((servicio) => (
          <div key={servicio.id} className="Card">
            <>
              <h1>{servicio.nombre}</h1>
              <img src={`${servicio.imagen}`} alt="" />
              <p className="Categoria">Categoria: {servicio.categoria}</p>
              <p>$ {servicio.precio }</p>
              <ItemCount servicio={servicio} />
            </>
          </div>
        ))
      )}
    </div>
  );
};

export default ItemDetail;
