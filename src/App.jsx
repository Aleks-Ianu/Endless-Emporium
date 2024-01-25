import React from 'react'
import { useState } from 'react'
import { HashRouter  as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Product from './components/Product';
<co></co>
import HomePage from './pages/HomePage'
import NavBar from './components/Navbar';
import { CartProvider } from './context/CartContext';
import Footer from './components/Footer';
import ShoppingCart from './components/ShoppingCart';
import 'react-chatbot-kit/build/main.css';
import ChatBotContainer from './components/Chatbot/ChatBotContainer/ChatBotContainer';
import Checkout from './components/Checkout/Checkout';
import "@stripe/stripe-js";
import './styling.css'


function App() {
  const [count, setCount] = useState(0)
  const [isCartOpen, setCartOpen] = useState(false);

  const toggleCartModal = () => {
    setCartOpen(!isCartOpen);
  };

  return (
    <CartProvider> {/* Wrap everything inside CartProvider */
    <Router>
      <div>
      {isCartOpen && <ShoppingCart />}
      </div>
      <Routes>
        {/* <Route path="/" element={<Login />} /> */}
        <Route path="/" element={<HomePage toggleCartModal={toggleCartModal}/>} />
        <Route path="/product/:productId" element={<div><NavBar toggleCartModal={toggleCartModal}/><Product /><Footer /><ChatBotContainer /></div>} />
      <Route path="/checkout" element = {<div><Checkout /></div>} />
      </Routes>
    </Router> }
  </CartProvider>
    
  )
}

export default App;