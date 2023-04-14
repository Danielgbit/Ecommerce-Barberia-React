import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Item = ({ nombre, categoria, id, img }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) {
    return (
      <div className="ContainerSpinner">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="ContainerCatalogo">
      <div className="CartCatalogo">
        <img src={`${img}`} alt="" />
        <h2 className="NombreItem">{nombre}</h2>
        <p className="CategoriaCatalogo">Categoria: {categoria}</p>
        <Link to={`/detalle/${id}`}>
          <button className="Detalle">Detalle</button>
        </Link>
      </div>
    </div>
  );
};

export default Item;
