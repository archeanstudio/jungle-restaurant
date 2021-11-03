import React from 'react';
import './Nav.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from '../Home';
import Visit from '../visit/Visit';



function Nav() {

const navStyle = {
    color: 'black',
}; //改变link中字体的颜色

return (
  <Router>
    <nav>
      <div className="logo">
       <img className="logo-image" src="./images/logo.png" alt="" />
      </div> 
      <ul className= "nav-links"> 
        <Link style ={navStyle} to ='/Home'>
            <li>Jungle</li>
        </Link>
        <Link tyle ={navStyle} to ='/menu'>
        <div style ={navStyle}>
          <a href="#Menu">Menu</a>
        </div >
        </Link>
        <Link style ={navStyle} to ='/Visit'>
          <li>Visit</li>
        </Link> 
        {/* <Link style ={navStyle} to ='/Others'>
          <li>Others</li>
        </Link> */}
      </ul>
    </nav>
    <div class="block" >
      <hr />
    </div>

    <Route path="/home" exact component={Home} />
    {/* <Route path="/menu" exact component={Menu} /> */}
    <Route path="/visit" exact component={Visit} />
    {/* <Route path="/others" component={Others} /> */}
  </Router>
  );//链接设置
}

export default Nav;