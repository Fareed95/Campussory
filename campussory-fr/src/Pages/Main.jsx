import React from 'react'
import Placed from '../components/Placed'
import Hero from '/src/components/Hero.jsx'
import Map from '/src/components/Map.jsx'
import Navbar from '/src/components/Navbar.jsx'
function Main() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Map></Map>
      <Placed></Placed>

    </div>
  )
}

export default Main
