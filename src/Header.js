import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import {useStateValue} from "./StateProvider";

function Header() {


  const [{basket}, dispatch] = useStateValue();
  
  

  return (
    <nav className='header'>

      <Link to="/">
        <img className='header__logo' src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" srcset="" />
      </Link>

      <div className="header__search">
        <input type="text" className="header__searchInput" placeholder='Search Amazon.com' />
        <SearchIcon className='header__searchIcon'></SearchIcon>

      </div>


      <div className="header__nav">

        <Link to="/login" className='header__link'>
          <div className="header__option">
            <span className='header__optionLineOne'>Hello, Ashu</span>
            <span className='header__optionLineTwo'>sign in</span>

          </div>
        </Link>

        <Link to="/" className='header__link'>
          <div className="header__option">
            <span className='header__optionLineOne'>Returns</span>
            <span className='header__optionLineTwo'>& Orders</span>

          </div>
        </Link>

        <Link to="/checkout" className='header__link'>
          <div className="header__optionBasket">
            
            <ShoppingBasketOutlinedIcon></ShoppingBasketOutlinedIcon>
            <span className='header__optionLineTwo header__basketCount'>{basket?.length}</span>
          </div>
        </Link>


      </div>
    </nav>
  )
}


export default Header
