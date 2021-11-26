import React from 'react'

import './logoPage.css'

const LogoPage = () => {
  return (
    <div className='logoPage'>
      <div className='logoPage-menu'>
        MENU
      </div>
      <div className='logoPage-logo'>
        <img className="logoPage-logo-image" src="./images/logo.png" alt="" />
      </div>
      <div className='logoPage-booking'>
        <div className='logoPage-button'>BOOKING</div>
      </div>
    </div>
  )
}

export default LogoPage
