import React from 'react'
import { useProduct } from "./ProductContext";
import {BiSolidUser,BiSolidCartAlt} from 'react-icons/bi'
import '../styles/Navbar.css'
const Navbar = () => {
    const { toggleCartVisibility } = useProduct();
    const { toggleUserLoginVisibility } = useProduct();
    const{ cartItemCount} = useProduct(0);
  return (
    <div className='navbar'>
      <div className="navbar-logo">TUMER</div>
      <div className="navbar-link">
        <li>Home</li>
        <li>Products</li>
        <li>About</li>
        <li>Contact</li>
        <div className="cart-icon">
        <button onClick={toggleCartVisibility}><BiSolidCartAlt className='navbar-icon' />{cartItemCount > 0 && <span className="cart-count">{cartItemCount}</span>}</button>
        </div>
        <button onClick={toggleUserLoginVisibility}>
        <BiSolidUser className='navbar-icon'/>
        </button>
      </div>
    </div>
  )
}

export default Navbar
