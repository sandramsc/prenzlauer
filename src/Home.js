import React from 'react';
import './Home.css';
import headerBanner from './images/header_banner.jpg';
import Product from './Product';

function Home() {
  return (
    <div className='home'>
        <div className='home_container'>
            <img className='home_image' src={headerBanner} alt='' />
            <div className='home_row'>
                <Product />
                <Product />
            </div>
            <div className='home_row'>
                <Product />
                <Product />
                <Product />
            </div>
            <div className='home_row'>
                <Product />
            </div>
        </div>
    </div>
  )
}

export default Home