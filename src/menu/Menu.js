import React from 'react'

import './menu.css'

import junglePlace from './jungle-place.jpg';

const Menu = () => {
  const ShadowImage = (props) => {
    return (
      <div>
        <img src={props.img} alt="" />
      </div>
    )
  }

  return (
    <div className='menu'>

      <div className='menu-img' style={{ backgroundImage: `url(${junglePlace})` }}>
        <div>
          {/* <img className="menu-logo-image" src="./images/logo.png" alt="" /> */}
        </div>
      </div>

      <div className='menu-text'>
        <div className='menu-text-title'>
          MENU
        </div>
        <div className='menu-text-para'>
          ALWAYS FRESH AND EVOLVING WITH THE SEASONS, THE AURA MENU FOCUSES ON LOCAL TASMANIAN PRODUCE AND IS UPDATED REGULARLY. DIETARY SUBSTITUTIONS AVAILABLE ON REQUEST.
        </div>
        <div className='menu-text-link'>
          OUR MENU
        </div>
        <div className='menu-text-link'>
          OUR DINNER LIST
        </div>
      </div>
    </div>
  )
}

export default Menu
