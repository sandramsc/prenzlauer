/* Designed & coded by Sandra Ashipala 20.03.2022 <https://github.com/sajustsmile> */
import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';
import checkoutAd from './images/checkout_ad.jpg';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';

function Checkout() {
    const [{ basket }, dispatch] = useStateValue();

  return <div className='checkout'>
      <div className='checkout_left'>
          <img src={checkoutAd} alt=''/>
          <div>
             <h2 className='checkout_title'>Your Shopping Basket</h2>
             
             {basket.map(item => (
              <CheckoutProduct 
              id={item.id}
              title={item.title}
              price={item.price}
              rating={item.rating}
              image={item.image}y
              />
          ))}
          </div>
      </div>
      <div className='checkout_right'>
          <Subtotal />
          {/* checkOut */}
          {/*checkOut  */}
          {/*checkOut */}
          {/* checkOut */}
        
      </div>
  </div>
}

export default Checkout;
