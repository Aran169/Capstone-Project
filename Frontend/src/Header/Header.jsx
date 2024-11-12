import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className='header'>
    <nav>
      <div className='logo-container'>
        <Link className='logo' to='/'>
          CITY-MONITOR
        </Link>
      </div>
      <img src='/logo.png' alt='logo' />
      <div className='right-container-navbar'>
        <Link to='/'>Home</Link>
        <Link to='/features'>Features</Link>
        <Link to='/analysis'>Analysis</Link>
        <Link to="/about">About</Link>
        <Link to='/login'>
          <button>Login</button>
        </Link>
      </div>
    </nav>
      <div className='header-text'>
        <h2>
          Analysed, Summarised and
          <br /> Organized report of Smart Cities
        </h2>
        <button>Wanna Try</button>
      </div>
      <div className='dec-img'>
        <img src='/img1.png' alt='img1' />
      </div>

      <div className='slogan1'>
        <h2>Paving the Way for Smarter, Sustainable Cities</h2>
      </div>

      <div className='display1'>
        <div className='container1'>
          <div className='sub-container1'></div>
          <div className='sub-container2'>
            <h3>Rural</h3>
            <img src="img2.png" alt="rural"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
