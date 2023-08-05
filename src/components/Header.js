import React from 'react'
import eve from "../imgs/eve.png"

const Header = () => {
  return (
    <div className='header'>
        <img src={eve} alt='my-cat' className='logo' />
        <h1>Talk to my cat!</h1>
    </div>
  )
}

export default Header