import React from 'react'
import '/src/Styles/Formcomp.css'
import { Link } from "react-router-dom";
function Formcomp() {
  return (
    <div className='form_comp'>
      <div className="clg">
      <Link to = "/form1">Company</Link>
      </div>
      <div className="stud">
      <Link to = "/form">Student</Link>

      </div>
    </div>
  )
}

export default Formcomp
