import React from 'react';
import './Header.css',
import './images/header_logo'

function Header() {
  return <div className="header"> 
  <img className="header_logo" scr="./images/header_logo"/>
  <div className="header_search">
  <input className="header_searchInput" type="text"/>
  {/* Logo */}
  </div>

  <div className="header_nav"></div>
  </div>;
}

export default Header;
