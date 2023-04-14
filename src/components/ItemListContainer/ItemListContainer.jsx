import ItemList from './ItemList'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore } from "firebase/firestore"



const ItemListContainer = () => {

  const [servicios, setServicios] = useState([]);

  const {categoria} = useParams();

  useEffect(() => {

    const baseDatos = getFirestore()

    const coleccionServicios = collection(baseDatos, "servicios")

    getDocs(coleccionServicios).then((snapshot)=> {
      const docs = snapshot.docs.map((doc)=> ({ id: doc.id, ...doc.data() }))
      
      setServicios(docs)
    });
  }, []);

  const categoriaFilter = servicios.filter((servicio) => servicio.categoria === categoria )

  return (
    <div className='ItemListContainer'>

      { categoria ? <ItemList servicios={categoriaFilter} /> : <ItemList servicios={servicios} />}
      
    </div>
  )
}

export default ItemListContainer