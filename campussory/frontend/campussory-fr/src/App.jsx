import React from 'react'
// import Hero from '/src/components/Hero.jsx'
import Main from '/src/Pages/Main.jsx'
import Prep from '/src/Pages/Prep.jsx'
import Demo from '/src/Pages/Demo.jsx'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'

function App() {
  

  return (
    <div>
      <BrowserRouter>
      <Routes>

        <Route index element ={<Main></Main>}></Route>
        <Route path="/home" element ={<Main></Main>}></Route>
        <Route path="/prep" element ={<Prep></Prep>}></Route>
        <Route path="/demo" element ={<Demo></Demo>}></Route>
       

      </Routes>
      </BrowserRouter>
    
    
    </div>
  )
}

export default App
