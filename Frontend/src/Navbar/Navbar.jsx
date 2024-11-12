import React from "react";
import "./Navbar.css";
function Navabr() {
  return (
    <div>
      <nav>
        <a className="logo" href="/">City-Monitor</a>
        <div className="right-container-navbar">
          <a href='/'>Features</a>
          <a href='/'>Analysis</a>
          <a href='/'>About</a>
          <button href="/">Login</button>
        </div>
      </nav>
    </div>
  );
}

export default Navabr;
