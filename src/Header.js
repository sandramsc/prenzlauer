import React from 'react';
import './Header.css';
import logo from './images/header_logo.png';

function Header() {
  return <div className="header"> 
  <img className="header_logo" src= { logo }/>
  <div className="header_search">
  <input className="header_searchInput" type="text"/>
  {/* Logo */}
  </div>

  <div className="header_nav">
  <div className="header_option">
    <span className="header_optionLineOne">
    Hello Guest
    </span>
    <span className="header_optionLineTwo">
    Sign In
    </span>
  </div>

  <div className="header_option">
    <span className="header_optionLineOne">
    Retruns
    </span>
    <span className="header_optionLineTwo">
    & Orders
    </span>
  </div>

  <div className="header_option">
    <span className="header_optionLineOne">
    Your
    </span>
    <span className="header_optionLineTwo">
    Prime
    </span>
  </div>
  </div>
  </div>;
}

export default Header;
