import React from 'react'
// import Hero from '/src/components/Hero.jsx'
import Main from '/src/Pages/Main.jsx'
import Login from '/src/Pages/Login.jsx'
import Prep from '/src/Pages/Prep.jsx'
import Demo from '/src/Pages/Demo.jsx'
import Form from '/src/components/Form.jsx'
import Form1 from '/src/components/Form1.jsx'
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
        <Route path="/login" element ={<Login></Login>}></Route>
        <Route path="/form" element ={<Form></Form>}></Route>
        <Route path="/form1" element ={<Form1></Form1>}></Route>
       

      </Routes>
      </BrowserRouter>
    
    
    </div>

  )
}

export default App
