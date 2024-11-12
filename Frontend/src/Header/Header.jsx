import React from "react";
import "./Header.css";

function Header() {
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
          <div className='sub-container1'>
           <a href="#"><img src="img1.png" className="hover-image1"/> </a>
           <span className="hover-text">urban</span>
     
          </div>
          <div className='sub-container2'>
            <a  href="#"><img src="img2.png" className="hover-image2"/></a>
            <span className="hover-text">Rural</span>
     
            
          </div>
        </div>
      </div>
    </div>

    <div className="dashboard">

      <div className="display">

      </div>

     
    </div>

    </>
    
  );
}

export default Header;
