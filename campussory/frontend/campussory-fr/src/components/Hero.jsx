import React from 'react'
import '/src/Styles/Hero.css'
import img2 from '/public/images/WhatsApp Image 2024-03-06 at 1.25.41 PM.jpeg'
import img3 from '/public/images/WhatsApp Image 2024-03-06 at 1.29.38 PM.jpeg'
import img4 from '/public/images/WhatsApp Image 2024-03-06 at 1.25.58 PM.jpeg'
import img5 from '/public/images/undraw_job_hunt.svg'

function Hero() {
  return (
    <div className='Hero'>
      <div id="Hero">
        <div id="image">
        <div id="image_left">
          <img src={img2} alt="" />
        </div>
        <div id="image_right">
          <img src={img3} alt="" />
          <img id="second" src={img4} alt="" />
        </div>    
      </div>
      <div id="model">
        <img src={img5} alt="" />
      </div>
      <div id="text">
        <h1 id="one">Book</h1>
        <h1 id="two" >Your</h1>
        <h1 id="three" >First</h1>
        <h1 id="four" >Placement</h1>
      </div>
      <button>Now</button>
      </div>
      
    </div>
  )
}

export default Hero
