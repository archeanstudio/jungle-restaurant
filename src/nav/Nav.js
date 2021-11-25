import React from 'react';
import { Link } from "react-router-dom";

import './Nav.css';

function Nav() {

  const navStyle = {
    // color: 'black',
  };

  return (
    <div className='nav'>
      {/* <nav>
        <div className="logo">
          <Link to='/home'>
            <img className="logo-image" src="./images/logo.png" alt="" />
          </Link>
        </div>

        <ul className="nav-links">
          <Link to='/menu'>
            <a href="#Menu">Menu</a>
          </Link>
          <Link to='/visit'>
            <li>Visit</li>
          </Link>
        </ul>
      </nav> */}

      <div className='nav-left nav-links'>
        <Link to='/menu'>
          Menu
        </Link>
      </div>

      <div className='nav-logo'>
        <Link to='/home'>
          <img className="logo-image" src="./images/logo.png" alt="" />
        </Link>
      </div>

      <div className='nav-right nav-links'>
        <Link to='/visit'>
          Visit
        </Link>
      </div>
    </div>

  );
}

export default Nav;