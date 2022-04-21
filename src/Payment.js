/* Designed & coded by Sandra Ashipala 20.04.2022 <https://github.com/sajustsmile> */
import React, {useState} from 'react';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css';
import { useStateValue } from './StateProvider';
import { Link } from 'react-router-dom';
import CurrencyFormat from 'react-currency-format';
import { useElements, CardElement, useStripe } from '@stripe/react-stripe-js';
import { getBasketTotal } from './reducer';

function Payment() {
//pull in user email from the data layer
const [{basket, user}, dispatch] = useStateValue();
const stripe = useStripe();
const elements = useElements();

const [error, setError] = useState(null);
const [disabled, setDisabled] = useState(true);
const [succeeded, setSucceeded] = useState(false);
const [processing, setProcessing] = useState("");
const [clientSecret, setClientSecret] = useState(true);

useEffect(() => {
    //strpe secret that allows tocharge a customer
    const getClientSecret = async () => {
        //axios allows to make requestsi.e post/get
        const response = await axios
    }
}, [basket])

const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    //const payload = await stripe

}

const handleChange = event => {
    //listens for chnages in CardElement
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
}

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
                 <form onSubmit={handleSubmit}>
                     <CardElement onChange={handleChange}/>
                     <div className='payment_priceContainer'>
                     {/* sums up basket total */}   
                     <CurrencyFormat
                        renderText={(value) =>(
                            <h3>Order Total: {value}</h3>
                        )}
                        decimalScale={2}
                        value={getBasketTotal(basket)}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={'€'}
                        />
                        <button disabled={processing || disabled
                            || succeeded}>
                            <span>{processing ? <p>Processing</p> : 'Buy Now'}</span>
                            </button>
                     </div>
                     {/* Error */}
                     {error && <div>{error}</div>}
                 </form>
                </div>
                </div>
        </div>
    </div>
  )
}

export default Payment