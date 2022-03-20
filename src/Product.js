import React from 'react';
import './Product.css'

function Product() {
  return <div className='product'>
    <div className='product_info'>
        <p>The Lean Startup: How Constant Innovation Creates Radically Successful Businesses PaperBack</p>
        <p className='product_price'>
            <small>€</small>
            <strong>11.98</strong>
        </p>
        <div className='product_rating'>
        <p>🌟</p>
        </div>
    </div>
    <img src='https://th.bing.com/th/id/OIP.B25ABjJwrboPQ88pX6FOJAHaDn?w=306&h=171&c=7&r=0&o=5&dpr=1.25&pid=1.7' alt=''/>
   <button>Add to Basket</button>
    </div>;

}

export default Product;