import React from 'react';
import './Home.css';
import headerBanner from './images/header_banner.jpg';

function Home() {
  return (
    <div className='home'>
         <div className='home_container'>
        <img className='home_image' src={headerBanner} alt='' />
        </div>
    </div>
  )
}

export default Home