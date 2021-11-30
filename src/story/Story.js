import React from 'react'

import './story.css'

const Story = () => {
  const aboutText = {
    title: 'JUNGLE: RESTAURANT, LOUNGE BAR & EVENT SPACE',
    text: [
      'HIGH IN THE SKY BETWEEN THE DERWENT RIVER & KUNANYI / MOUNT WELLINGTON IS AURA, HOBART’S FIRST ROOFTOP VENUE. ',
      'POSITIONED AT THE EPICENTRE OF THE SPECTACULAR TASMANIAN SCENERY, AURA HAS BEEN DESIGNED TO ENCAPSULATE THE JUXTAPOSITION OF THE NATURAL ELEMENTS THAT SURROUND HER. ',
      'WITH A UNIQUE PANORAMIC VIEW OF HOBART, FUN DINING APPROACH TO SERVICE & AN INFORMAL BUT INTIMATE ENVIRONMENT, LET US SHOW YOU WHAT OCCURS BETWEEN THE OCEAN, THE MOUNTAIN & THE SKY…',
      'NOW OPEN.',
    ]
  }
  return (
    <div className='story'>
      <div className='story-title'>
        {aboutText.title}
      </div>
      <div className='story-text'>
        {aboutText.text.map((para) => {
          return (
            <div className='story-para'>{para}</div>
          )
        })}
      </div>
    </div>
  )
}

export default Story
