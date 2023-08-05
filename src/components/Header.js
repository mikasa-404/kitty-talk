import React from 'react'
import eve from "../imgs/eve.png"
import { useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  return (location.pathname==="/")?(
   null
  ):(
    <div className='header'>
        <img src={eve} alt='my-cat' className='logo' />
        <h1>Welcome to Kitty-talk </h1>
    </div>
  )
}

export default Header