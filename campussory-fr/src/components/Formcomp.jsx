import React from 'react'
import '/src/Styles/Formcomp.css'
import { Link } from "react-router-dom";
import img7 from '/public/images/undraw_interview_re_e5jn.svg'
import img8 from '/public/images/undraw_male_avatar_g98d.svg'
function Formcomp() {
  return (
    <div className='form_comp'>
      <div className="clg">
        <img src={img7} alt="" />
      <Link to = "/form1">Company</Link>
      </div>
      <div className="stud">
        <img src={img8} alt="" />
      <Link to = "/form">Student</Link>

      </div>
    </div>
  )
}

export default Formcomp