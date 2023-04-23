import React from 'react'
import"./Skills.css"
import Skill from "./Skill"
import"./Skills.css"
import Interests from "./Interest.js"

function skills() {
  return  <>
    <div className='skills'>
        <h2 className='h2'> Compétences</h2>
        <Skill title="C++" rating="4"/>
        <Skill title="C" rating="3"/>
        <Skill title="HTML/CSS" rating="5"/>
        <Skill title="SQL" rating="5"/>
        <Skill title="PHP" rating="3"/>
        <Skill title=".NET" rating="2"/>
        <Skill title="REACT" rating="2"/>
        <Skill title="UML" rating="4"/>
    </div>

    <div className='skills'>
        <h2 className='h2'> Langues</h2>
        <Skill title="Anglais" rating="3"/>
        <Skill title="Espagnole" rating="3"/>
    </div>
    <Interests />
  </>
  
}

export default skills