import React from 'react'
import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import ProductPage from './pages/ProductPage';
import HomePage from './HomePage'
function App() {
  const [count, setCount] = useState(0)
   
  return (
    <Router>
      <Routes>
      {/* <Route path="/" element={<Login />} /> */}
      <Route path="/" element= {<HomePage />} />
      
      <Route path="/product" element={<ProductPage />} />
      </Routes>
    </Router>
  )
}

export default App;