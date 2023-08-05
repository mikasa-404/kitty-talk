import React from 'react'
import cat from "../imgs/cat.jpg"
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className='home'>
        <img className="homeimg" src={cat} alt="cat"/>
        <div className='child'>
        <h1>Welcome to kitty-talk</h1>
        <Link to="/kitty-talk">
        <button className="chatbot">Enter Chat-bot</button>

        </Link>
        </div>
        </div>
  )
}

export default Home