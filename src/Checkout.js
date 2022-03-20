import React from 'react';
import './Checkout.css';
import checkoutAd from './images/checkout_ad.jpg'

function Checkout() {
  return <div className='checkout'>
      <div className='checkout_left'>
          <img src={checkoutAd} alt=''/>
          <div>
             <h2 className='checkout_title'>Your Shopping Basket</h2>
          </div>
      </div>
      <div className='checkout_right'>
          <h2>The subtotal will go here</h2>
          {/* Basket */}
          {/* Basket */}
          {/* Basket */}
          {/* Basket */}
          {/* Basket */}
      </div>
  </div>
}

export default Checkout;
