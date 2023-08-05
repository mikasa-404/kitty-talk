import React from 'react'
import eve3 from "../imgs/eve3.png"
import Options from './Options'


const Picture = (props) => {
  return (
    <div className='cat-picture'>
        <img className="cat" src={eve3} alt="mycat"/>
        <Options {...props}/>
    </div>
    
  )
}

export default Picture