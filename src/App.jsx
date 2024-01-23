import React from 'react'
import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Product from './components/Product';
<co></co>
import HomePage from './pages/HomePage'
import NavBar from './components/Navbar';
import ShoppingCart from './components/ShoppingCart';

function App() {
  const [count, setCount] = useState(0)
  const [isCartOpen, setCartOpen] = useState(false);

  const toggleCartModal = () => {
    setCartOpen(!isCartOpen);
  };

  return (
    <Router>
      <div>
      
      {isCartOpen && <ShoppingCart />}
      </div>
      <Routes>
      {/* <Route path="/" element={<Login />} /> */}

      <Route path="/" element= {<HomePage toggleCartModal={toggleCartModal}/>} />
      <Route path="/product/:productId" element={<div><NavBar toggleCartModal={toggleCartModal}/><Product /></div>} />


      </Routes>
    </Router>
    
  )
}

export default App;