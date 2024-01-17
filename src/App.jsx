import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FakeStoreComponent from './components/FakeStoreComponent'
import Navbar from './components/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <FakeStoreComponent />
      
    </>
  )
}

export default App
