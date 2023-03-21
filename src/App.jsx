import ItemCount from './components/ItemCount';
import reactLogo from './assets/react.svg'
import './App.scss'
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemList from './components/ItemList';
import ItemDetailContainer from './components/ItemDetailContainer';
import Home from './components/Home';



function App() {
  


  return (
    <>
      <BrowserRouter>
        <NavBar />

        <Routes>

          <Route exact path="/" element={<Home/>}/>

          <Route exact path="/catalogo" element={<ItemListContainer/>} />

          <Route exact path="/detalle/:id" element={<ItemDetailContainer/>} />

          <Route exact path="/categorias/Corte-de-cabello" element={<ItemListContainer/>} />

          <Route exact path="/categorias/afeitado" element={<ItemListContainer/>} />
       
          <Route exact path="/categorias/peinado" element={<ItemListContainer/>} />
    
          <Route exact path="/categorias/productos-de-cabello" element={<ItemListContainer/>} />

    

        </Routes>
     

      </BrowserRouter>
    </>
  );
}

export default App
