import React from "react";
import { CartContext } from "../../Context/CartContext";
import { useContext, useState } from "react";
import {
  collection,
  addDoc,
  getFirestore,
  serverTimestamp,
} from "firebase/firestore";

const Cart = () => {
  const { cartItems, setCartItems, decrementCart } = useContext(CartContext);

  const [ordenId, setordenId] = useState(null);
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [compraRealizada, setCompraRealizada] = useState(false);
  const [loading, setLoading] = useState(false);

  const baseDatos = getFirestore();

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();

    const ordersCollection = collection(baseDatos, "orden"); 

    const ordenService = {
      nombre,
      correo,
      servicioCarrito: cartItems.map((item) => ({
        id: item.id,
        nombre: item.nombre,
        categoria: item.categoria,
        precio: item.precio,
      })),
      itemstotal,
      date: serverTimestamp(),
    };

    addDoc(ordersCollection, ordenService).then(({ id }) => {
      setordenId(id);
      setLoading(false);
      setCompraRealizada(true);
    });
  };



  const itemstotal = cartItems.reduce((acumulador, item) => {
    return acumulador + item.precio * item.cantidad;
  }, 0);

  if (loading) {
    return (
      <div className="ContainerSpinner">
        <div className="spinner"></div>
      </div>
    );
  }

  if (compraRealizada) {
    return (
      <div className="ContainerCheckout">
        <h4 className="MensajeCheckout">Su compra fue completada con éxito</h4>
        <span class="material-symbols-outlined">sync_saved_locally</span>
        <p className="NumerodeOrden">{`Su número de orden es: ${ordenId}`}</p>
        <p className="MensajeEmail">Revise su correo electronico</p>
      </div>
    );
  }

  return (
    <>
      {cartItems.length === 0 ? (
        <div className="ContainerCarritoVacio">
          <h1 className="CarritoVacioText">El carrito está vacío</h1>
          <img src="public\img\Ilustracion-Close.png" alt="" />
        </div>
      ) : (
        <div className="ContainerMaxCart">
          <div className="ContainerCart">
            <span className="material-symbols-outlined">local_mall</span>
            {cartItems.map((servicio) => (
              <div className="CartServicios" key={servicio.id}>
                <img className="ImgCart" src={`${servicio.imagen}`} alt="" />
                <div>
                  <h2 className="NombreCart">{servicio.nombre}</h2>

                  <div className="CategoriaCart">
                    <span className="CategoryTitle">Categoria</span>
                    <p className="CategoryItem">{servicio.categoria}</p>
                  </div>
                </div>

                <div className="ContainerCantidad">
                  <p className="TotalCantidadCart">{servicio.cantidad}</p>
                  <a href="#">
                    <span
                      onClick={() => decrementCart(servicio.nombre)}
                      className="material-symbols-outlined"
                    >
                      do_not_disturb_on
                    </span>
                  </a>
                </div>

                <p className="PrecioCart">{`$ ${(
                  servicio.precio * servicio.cantidad
                ).toFixed(2)}`}</p>
              </div>
            ))}
          </div>

          <div className="ContainerTotalFormulario">
            <div className="ContainerTotal">
              <h1 className="TitleTotal">TOTAL</h1>
              <p className="TextTotal">{`$ ${itemstotal.toFixed(2)}`}</p>
            </div>

            <div className="ContainerFormulario">
              <div className="Formulario">
              <span class="material-symbols-outlined">sell</span>
                <h3 className="TitleFormulario">CHECKOUT</h3>

                <form className="ContainerInputCard" onSubmit={handleSubmit}>
                  <span> Nombre:</span>
                  <input
                    type="text"
                    placeholder="Ingrese su nombre"
                    onChange={(e) => setNombre(e.target.value)}
                  />

                  <span> Correo electrónico:</span>
                  <input
                    type="email"
                    placeholder="Ingrese su Email"
                    onChange={(e) => setCorreo(e.target.value)}
                  />

                  <div className="ContainerSendCart">
                    <button className="BotonSendCart" type="submit">
                      Confirmar compra
                      
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
