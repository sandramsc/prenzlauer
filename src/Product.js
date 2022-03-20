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
    <img src='https://www.picclickimg.com/d/l400/pict/134056058245_/The-Lean-Startup-How-Constant-Innovation-Creates-Radically.jpg' alt=''/>
   <button>Add to Basket</button>
    </div>;

}

export default Product;