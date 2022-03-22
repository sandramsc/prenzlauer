/* Designed & coded by Sandra Ashipala 20.03.2022 <https://github.com/sajustsmile> */
import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';
import checkoutAd from './images/checkout_ad.jpg'

function Checkout() {
  return <div className='checkout'>
      <div className='checkout_left'>
          <img src={checkoutAd} alt=''/>
          <div>
             <h2 className='checkout_title'>Your Shopping Basket</h2>
              {/* Basket */}
          {/* Basket */}
          {/* Basket */}
          {/* Basket */}
          {/* Basket */}
          </div>
      </div>
      <div className='checkout_right'>
          <Subtotal />
        
      </div>
  </div>
}

export default Checkout;
