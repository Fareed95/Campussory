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
    <div id="questions">
    <div class="card">
  <div class="question">
    <h2>Question:</h2>
    <p>What is the difference between == and === in JavaScript?</p>
  </div>
  <div class="answer">
    <h2>Answer:</h2>
    <p>The '==' operator in JavaScript compares only the values, whereas the '===' operator compares both the values and types.</p>
  </div>
</div>
<div class="card">
  <div class="question">
    <h2>Question:</h2>
    <p>What is the difference between append() and extend() methods in Python lists?</p>
  </div>
  <div class="answer">
    <h2>Answer:</h2>
    <p>The append() method adds a single element to the end of the list, while the extend() method adds all the elements from an iterable (such as a list, tuple, or string) to the end of the list.</p>
  </div>
</div>
<div class="card">
  <div class="question">
    <h2>Question:</h2>
    <p>What is the difference between == and equals() method in Java?</p>
  </div>
  <div class="answer">
    <h2>Answer:</h2>
    <p>The == operator in Java compares the memory addresses of two objects, while the equals() method compares the contents of two objects for equality.</p>
  </div>
</div>
<div class="card">
  <div class="question">
    <h2>Question:</h2>
    <p>What is the difference between pass by value and pass by reference in C++?</p>
  </div>
  <div class="answer">
    <h2>Answer:</h2>
    <p>In pass by value, a copy of the actual parameter is passed to the function, so any changes made to the parameter inside the function do not affect the original value. In pass by reference, the memory address of the actual parameter is passed, allowing changes made inside the function to reflect on the original value.</p>
  </div>
</div>
<div class="card">
  <div class="question">
    <h2>Question:</h2>
    <p>What is a symbol in Ruby?</p>
  </div>
  <div class="answer">
    <h2>Answer:</h2>
    <p>In Ruby, a symbol is an immutable identifier that is often used as keys in hashes. Symbols start with a colon (:) followed by a name, like :symbol_name.</p>
  </div>
</div>
    </div>
    </>
  )
}

export default Prep
