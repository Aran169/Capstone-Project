import React from 'react'
import './About.css'
function About() {
  return (
    <>
    <div className='header'>
      <nav>
        <div className='logo-container'>
          <a className='logo' href='/'>
            CITY-MONITOR
          </a>
        </div>
        <img src='/logo.png' alt='logo' />
        <div className='right-container-navbar'>
          <a href='/'>Home</a>
          <a href='/'>Features</a>
          <a href='/'>Analysis</a>
          <a href='/'>About</a>
          <button>Login</button>
        </div>
      </nav>
      </div>
    <h1>Know About Our Idea</h1>
    </>
  )
}

export default About