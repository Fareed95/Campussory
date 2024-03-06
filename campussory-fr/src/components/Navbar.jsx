import React from 'react'
import '/src/Styles/Navbar.css'
import img1 from '/public/images/WhatsApp Image 2024-03-07 at 12.25.22 AM.jpeg'
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className='nav'>
      <div id="navbar">
        <div id="nav_left">
          <img src={img1} alt="" />
        </div>
        <div id="nav_right">
          <Link to = "/">Home</Link>
          <Link to = "/demo">My Schedules</Link>
          <Link to = "/prep">Prep Materials</Link>
          
        </div>
      </div>
    </div>
  )
}

export default Navbar
