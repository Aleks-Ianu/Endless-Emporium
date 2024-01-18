import React from 'react'
import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import FakeStoreComponent from './components/FakeStoreComponent';
import Navbar from './components/NavBar'
import Jumbotron from './components/Jumbotron'

function App() {
  const [count, setCount] = useState(0)
   
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<div><Navbar /><FakeStoreComponent /></div>} />
      </Routes>
    </Router>
  )
}

export default App;