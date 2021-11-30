import React from 'react';
// import '../App.css';
import '../visit/visitStyle.css';
import MyGoogleMap from '../visit/MyGoogleMap';


function Visit() {
  return (
    <div className="visit-style">
      <div>
        <h1 className="set-address">
          <a href="https://www.google.com/maps/place/141+Liverpool+St,+Hobart+TAS+7000/@-42.8827111,147.3231907,17z/data=!3m1!4b1!4m5!3m4!1s0xaa6e758533a00507:0xf67da7c7092b211f!8m2!3d-42.8827111!4d147.3253848"
            target="_blank" rel="noopener noreferrer">141 LIVERPOOL STREET, HOBART, TASMANIA 7000
          </a></h1>

        <MyGoogleMap />
      </div>

      <div className='open-time'>
        <div className="set-open-day"><h2>Open 7 days a week</h2></div>
        {/* <div className="set-open-time"> */}
        <h3 >Join us everyday</h3>
        {/* </div> */}
        <div className="set-open-time">
          <p>lunch 12:00-2:00pm </p>
          <p>dinner 4:30-10:00pm</p>
        </div>
      </div>


    </div>



  );
}

export default Visit;
