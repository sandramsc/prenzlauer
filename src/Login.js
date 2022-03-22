import React from 'react';
import './Login.css';
import loginLogo from './images/login_logo.png';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className='login'>
        <Link to='/'>
            <img className='login_logo' 
            src={loginLogo} alt='' />
        </Link>
        <div className='login_container'>
            <h1>Sign-in</h1>
            <form>
                <h5>E-mail</h5>
                <input type='text'/>
                <h5>Password</h5>
                <input type='password'/>
                <button className='login_signInButton'>Sign In</button>
            </form>
            <p>By signing-in you agree to Prenzlauer's (AMAZON CLONE)
                Conditions of Use & Sale. Please see our Privacy Notice,
                our Cookies Notice and our Interest-Based Ads Notice.</p>
        </div>
        <button className='login_registerButton'>Create Your Prenzlauer Account</button>
    </div>
  )
}

export default Login;