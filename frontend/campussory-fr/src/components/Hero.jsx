import React from 'react'
import '/src/Styles/Hero.css'
import img2 from '/public/images/college campus 1.avif'
import img3 from '/public/images/campus 2.jpg'
import img4 from '/public/images/college campus 3.avif'

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
      <div id="text">
        <h1 id="one">Book</h1>
        <h1 id="two" >Your</h1>
        <h1 id="three" >First</h1>
      </div>
      <button>Now</button>
      </div>
      
    </div>
  )
}

export default Hero
