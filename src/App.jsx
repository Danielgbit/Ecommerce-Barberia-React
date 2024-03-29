import reactLogo from './assets/react.svg'
import './App.scss'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Home from './components/NavBar/Home';
import Cart from './components/CartContainer/Cart';






function App() {
  
  return (
    <>
      <BrowserRouter>

        <NavBar />

      <Routes>


        <Route exact path='/' element={<Home/>} />

        <Route exact path="/catalogo" element={<ItemListContainer/>} />

        <Route exact path= "/categorias/:categoria" element={<ItemListContainer/>} />

       
 
          <Route exact path='/detalle/:id' element={<ItemDetailContainer/>} />
      
     

        <Route exact path="/Cart" element={<Cart/>} />


      </Routes>
        
        <ItemDetailContainer/>
      </BrowserRouter>
    </>
  );
}

export default App
