import React from 'react'
import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Product from './components/Product';
<co></co>
import HomePage from './pages/HomePage'
import NavBar from './components/Navbar';


function App() {
  const [count, setCount] = useState(0)
   
  return (
    <Router>
      <Routes>
      {/* <Route path="/" element={<Login />} /> */}
      <Route path="/HomePage" element= {<HomePage />} />
      <Route path="/product/:productId" element={<div><NavBar /><Product /></div>} />

      </Routes>
    </Router>
  )
}

export default App;