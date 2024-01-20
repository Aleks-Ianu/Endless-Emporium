import React from 'react'
import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Product from './components/Product';
<co></co>
import HomePage from './pages/HomePage'
import NavBar from './components/Navbar';
// Chatbot imports
import Chatbot from 'react-chatbot-kit';
import ActionProvider from './components/Chatbot/ActionProvider';
import MessageParser from './components/Chatbot/MessageParser';
import config from './components/Chatbot/Config';

function App() {
  const [count, setCount] = useState(0)
   
  return (
    <Router>
      <Routes>
      {/* <Route path="/" element={<Login />} /> */}
      <Route path="/" element= {<HomePage />} />
      <Route path="/product/:productId" element={<div><NavBar /><Product /><Chatbot config={config} actionProvider={ActionProvider} 	    messageParser={MessageParser} /></div>} />

      </Routes>
    </Router>
  )
}

export default App;