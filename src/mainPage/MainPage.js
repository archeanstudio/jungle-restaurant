import React from 'react'

import LogoPage from '../logoPage/LogoPage'
import Story from '../story/Story'
import HomePage from '../home/HomePage'
import Menu from '../menu/Menu'
import Visit from '../visit/Visit'
import Booking from '../booking/Booking'

const MainPage = () => {
  return (
    <div>
      <LogoPage />
      <Story />
      {/* <Menu /> */}
      <HomePage />
      <Menu />
      <Visit />
      <Booking />
    </div>
  )
}

export default MainPage
