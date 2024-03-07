import React from 'react'
import sample_img1 from '/public/undraw_certification_re_ifll.svg'
import '/src/Styles/samplem.css'
import { Link } from "react-router-dom";

function SampleP() {
  return (
    <div className='samplep'>
<img className="vector" src={sample_img1}></img>     
<Link to = "/Samplepaper"><h2>Sample paper</h2></Link>
    </div>
  )
}

export default SampleP
