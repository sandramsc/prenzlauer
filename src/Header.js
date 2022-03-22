/* Designed & coded by Sandra Ashipala 03.02.2022 <https://github.com/sajustsmile> */
import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import logo from './images/header_logo.png';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider'

function Header() {
  const [{basket}, dispatch] = useStateValue();

  return <div className="header"> 
      <Link to='/'>
      <img className="header_logo" src= { logo } alt='' />
      </Link> 
      <div className="header_search" >
      <input className="header_searchInput" type="text" />
      <SearchIcon className="header_searchIcon" />
    </div>

    <div className="header_nav">
      <Link to='/login'>
      <div className="header_option">
        <span className="header_optionLineOne">Hello Guest</span>
        <span className="header_optionLineTwo">Sign In</span>
      </div>
      </Link>

      <div className="header_option">
        <span className="header_optionLineOne">Retruns</span>
        <span className="header_optionLineTwo">& Orders</span>
      </div>

      <div className="header_option">
        <span className="header_optionLineOne">Your</span>
        <span className="header_optionLineTwo">Prime</span>
      </div>
      <Link to='/checkout'>
      <div className="header_optionBasket">
      <ShoppingBasketIcon />
        <span className="header_optionLineTwo header_basketCount">{basket?.length}</span>
      </div>
      </Link>
    </div>
  </div>
}

export default Header;
