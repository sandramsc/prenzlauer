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
    </div>
  )
}

export default Login;