import React from 'react';
import './App.css';
import './home/home.css';




function Home() {
  return (
  <div>
    <div className='home'>
      <div className='place-image'>
      <img className='place-image-context' src="./images/jungle-place.jpg" alt="" />
      </div>
      
      <div className='place-text' >
      <p><b>Jungle, fusion food in the heart of Hobart.</b>
      <div className='place-text-a'>
      <a href="visit" target="_blank" rel="noopener noreferrer" className='a-underline'>SEE US ➝</a></div>
      </p> 
      </div>

    </div>
    <div>
    <div className='home'>
    <div className='place-text' >
      <p><b>   Check out our menus</b>
      <div className='place-text-a'>Available to eat-in and takeaway</div>
      
      <div className='place-text-a'>
      <a href="visit" target="_blank" rel="noopener noreferrer" className='a-underline'>  Our Menu ➝</a>
      </div>
     
      <div className='place-text-a'>
      <a href="visit" target="_blank" rel="noopener noreferrer" className='a-underline'>  Our Drinking List ➝</a>
      </div>
      </p> 
      </div>

      <div className='place-image'>
      <img className='place-image-context' src="./images/menu1.jpg" alt="" />
      </div>
     
    </div>
    </div>
    <div className="set-color">
    <div ><h2>Open 7 days a week</h2></div>
            <div >
           <h3 >Join us everyday</h3>
           </div>
           <div >
           <p>lunch 12:00-2:00pm </p>
           <p>dinner 4:30-10:00pm</p>
            </div>
            </div>
    </div>
    
  );
}

export default Home;