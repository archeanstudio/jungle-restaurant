import React from 'react'

import './booking.css'

const Booking = () => {
  return (
    <div className='booking'>

      <div className='booking-inputBlock'>
        <div className='booking-inputTitle'>
          HOW MANY PEOPLE?
        </div>
        <input className='booking-input' type="text" />
      </div>

      <div className='booking-inputBlock'>
        <div className='booking-inputTitle'>
          DATE & TIME
        </div>
        <input className='booking-input' type="text" />
      </div>

      <div className='booking-inputBlock'>
        <div className='booking-inputTitle'>
        WHAT'S YOUR NAME?
        </div>
        <input className='booking-input' type="text" />
      </div>

      <div className='booking-inputBlock'>
        <div className='booking-inputTitle'>
        YOUR PHONE NUMBER?
        </div>
        <input className='booking-input' type="text" />
      </div>

      
      <div className='booking-text'>
        We will contact you soonly!
      </div>
      
      <div className='booking-button'>
        BOOK!
      </div>
    </div>
  )
}

export default Booking
