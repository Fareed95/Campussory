import React from 'react'
import study_img1 from '/public/undraw_bookshelves_re_lxoy.svg'
import '/src/Styles/Studym.css'
import { Link } from "react-router-dom";

function StudyM() {
  return (
    <div className="studym">
<img className="vector" src={study_img1}></img>
<Link to = "/Studymaterial"><h2>Study Material</h2></Link>
    </div>
  )
}

export default StudyM
