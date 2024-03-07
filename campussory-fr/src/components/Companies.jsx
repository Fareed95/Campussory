import React from 'react'
import '/src/Styles/Companies.css'
import c1 from '/public/images/a.png'
import c2 from '/public/images/g.png'
import c3 from '/public/images/m.png'
import c4 from '/public/images/pp.png'
import c5 from '/public/images/isro.png'
import c6 from '/public/images/airtel.png'
import c7 from '/public/images/gs.png'
function Companies() {
  return (
    <div id="Companies">
      <div id="scroll_tag">
        <div id="scroll">
          <img src={c1} alt="" />
          <img src={c2} alt="" />
          <img src={c3} alt="" />
          <img src={c4} alt="" />
          <img src={c5} alt="" />
          <img src={c6} alt="" />
          <img src={c7} alt="" />
        </div>
        <div id="scroll">
          <img src={c1} alt="" />
          <img src={c2} alt="" />
          <img src={c3} alt="" />
          <img src={c4} alt="" />
          <img src={c5} alt="" />
          <img src={c6} alt="" />
          <img src={c7} alt="" />
        </div>
        <div id="scroll">
          <img src={c1} alt="" />
          <img src={c2} alt="" />
          <img src={c3} alt="" />
          <img src={c4} alt="" />
          <img src={c5} alt="" />
          <img src={c6} alt="" />
          <img src={c7} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Companies