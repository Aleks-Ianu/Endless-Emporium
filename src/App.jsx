import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import FakeStoreComponent from './components/FakeStoreComponent';
import Navbar from './components/NavBar'

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