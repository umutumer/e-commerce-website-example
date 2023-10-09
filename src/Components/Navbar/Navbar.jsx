import React from 'react'
import {FaShoppingBasket} from 'react-icons/fa'
import {BiSolidUser} from 'react-icons/bi'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="logo">LOGO</div>
      <div className="navbar-link">
        <li>Home</li>
        <li>Products</li>
        <li>About</li>
        <li>Contact</li>
        <FaShoppingBasket className='navbar-icon' />
        <BiSolidUser className='navbar-icon'/>
      </div>
    </div>
  )
}

export default Navbar
