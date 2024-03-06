import { useState } from 'react'
// import Hero from '/src/components/Hero.jsx'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
     <Navbar></Navbar>
    </div>
  )
}

export default App
