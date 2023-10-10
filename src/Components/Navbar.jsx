import React from 'react'
import { useProduct } from "./ProductContext";
import {BiSolidUser,BiSolidCartAlt} from 'react-icons/bi'
import '../styles/Navbar.css'
const Navbar = () => {
    const { toggleCartVisibility } = useProduct();
  return (
    <div className='navbar'>
      <div className="navbar-logo">TUMER</div>
      <div className="navbar-link">
        <li>Home</li>
        <li>Products</li>
        <li>About</li>
        <li>Contact</li>
        <button onClick={toggleCartVisibility}><BiSolidCartAlt className='navbar-icon' /></button>
        <BiSolidUser className='navbar-icon'/>
      </div>
    </div>
  )
}

export default Navbar
