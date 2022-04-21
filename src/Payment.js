/* Designed & coded by Sandra Ashipala 20.04.2022 <https://github.com/sajustsmile> */
import React from 'react';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css';
import { useStateValue } from './StateProvider';
import { Link } from 'react-router-dom';

function Payment() {
//pull in user email from the data layer
const [{basket, user}, dispatch] = useStateValue();

  return (
    <div className='payment'>
        <div className='payment_container'>
            <h1>Checkout (<Link to="/checkout">
                {basket.length} items</Link>)</h1>
            {/* payment section -delivery*/}
            <div className='payment_section'>
                <div className='payment_title'>
                    <h3>Delivery Address</h3>
                </div>
                <div className='payment_address'>
                   {/* <p>{user.email}</p> */}
                   <p>264 Prenzlauer Alle</p>
                   <p>Berlin, Germany</p>
                </div>
            </div>
            {/* payment section -review*/}
            <div className='payment_section'>
            <div className='payment_title'>
                    <h3>Review Items & Delivery</h3>
                </div>
                <div className='payment_items'>
                 {basket.map(item => (
                     <CheckoutProduct
                     id={item.id}
                     title={item.title}
                     image={item.image}
                     price={item.price}
                     rating={item.rating}
                     />
                 ))}
                </div>
                </div>
            {/* payment section -payment method*/}
            <div className='payment_section'>
            <div className='payment_title'>
                    <h3>Payment Method</h3>
                </div>
                <div className='payment_details'>
                 {/* StripeAPI */}
                </div>
                </div>
        </div>
    </div>
  )
}

export default Payment