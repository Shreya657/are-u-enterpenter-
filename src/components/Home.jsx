import React from 'react'
import './home.css'
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';

const Home = () => {

     const navigate=useNavigate();
     const handleClick=()=>{
    navigate('/quiz');
  }
  return (
    <div className='home'>
        
       <h1>Welcome to enterpenter</h1>
            <h3>check how much enterprenour mindset you have</h3>
            <button onClick={handleClick}>lets start</button>
    </div>
  )
}

export default Home
