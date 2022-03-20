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
                <Product 
                    id='1234'
                    title='The Lean Startup: How Constant Innovation 
                        Creates Radically Successful Businesses PaperBack' 
                    price={11.99} 
                    image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg'
                    rating={3}                        
                        />   
                 <Product 
                    id='5678'
                    title='Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl' 
                    price={356.59} 
                    image='https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg'
                    rating={5}                        
                        /> 
            </div>
            <div className='home_row'>
            <Product 
                    id='9101'
                    title="Samsung Note 49' Curved LED Gaming Monitor" 
                    price={299.99} 
                    image='https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg'
                    rating={4}                        
                        /> 
                 <Product 
                    id='1213'
                    title='Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric' 
                    price={102.98} 
                    image='https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$'
                    rating={2}                        
                        /> 
                 <Product 
                    id='1415'
                    title='Apple iPad Pro (12.9-inch, Wi-Fi, 32GB) - Silver (6th Generation)' 
                    price={629.59} 
                    image='https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg'
                    rating={4}                        
                        /> 
            </div>
            <div className='home_row'>
            <Product 
                    id='1617'
                    title="Samsung LC49RG90SSUXEN 24' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440" 
                    price={1105.99} 
                    image='https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg'
                    rating={5}                        
                        /> 
            </div>
        </div>
    </div>
  )
}

export default Home;