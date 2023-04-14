import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'
import { CartProvider } from "./Context/CartContext";





// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAE0nxJZH9RAqIsTqKBgSDJNxLV3exd3yY",
  authDomain: "mandala-barbershop.firebaseapp.com",
  projectId: "mandala-barbershop",
  storageBucket: "mandala-barbershop.appspot.com",
  messagingSenderId: "265015452827",
  appId: "1:265015452827:web:b9c039fc79fafb7192923e"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <CartProvider>
    <App />
  </CartProvider>,
  </React.StrictMode>,
)
