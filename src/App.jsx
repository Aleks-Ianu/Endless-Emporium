import React from 'react'
import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import FakeStoreProductComponent from './components/Cards';
import Navbar from './components/NavBar'
import Jumbotron from './components/Jumbotron'
import Product from './components/Product'

function App() {
  const [count, setCount] = useState(0)
   
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<div><Navbar /><Jumbotron /><FakeStoreProductComponent /></div>} />
      <Route path="/product/:productId" element={<div><Navbar /><Product /></div>} />
      
     
      </Routes>
    </Router>
  )
}

export default App;