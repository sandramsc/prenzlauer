import React from 'react';
import './CheckoutProduct.css'

function CheckoutProduct({ id, title, price, rating, image }) {
    return (
    <div className='checkoutProduct'>
            <img className='checkoutProduct_image' src={image}/>
        <div className='checkoutProduct_info'>
            <p className='checkoutProduct_title'>{title}</p>
            <p className='checkoutProduct_price'>{price}</p>
            <small>€</small>
            <strong>{price}</strong>
        
        <div className='checkoutProduct_rating'>
        {Array(rating).fill().map((_, i) => (
                <p>⭐</p>
            ))}
        </div>
        <button>Remove from basket</button>
    </div>
    </div>
  )
}

export default CheckoutProduct