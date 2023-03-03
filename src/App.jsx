import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'
import CartWidget from './components/CartWidget';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {

  return (
    <>
      <NavBar/>
      <ItemListContainer saludo={"Bienvenido"} estado={" mantenimiento"}/>
    </>
  );
}

export default App
