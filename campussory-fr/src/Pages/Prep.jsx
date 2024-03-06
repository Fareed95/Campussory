import React from 'react'
import StudyM from '/src/components/StudyM.jsx'
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import SampleP from '/src/components/SampleP.jsx';
import '/src/Styles/prep.css'
import Navbar from '/src/components/Navbar.jsx'
function Prep() {
  return (
    <>
    <Navbar></Navbar>
    <div className='prep'>
     
<StudyM></StudyM>
<SampleP></SampleP>
    </div>
    </>
  )
}

export default Prep
