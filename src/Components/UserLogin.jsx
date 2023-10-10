import React from 'react'
import '../styles/UserLogin.css'
import { useProduct } from './ProductContext';

const UserLogin = () => {
    const { toggleUserLoginVisibility } = useProduct();
    const { isUserLoginVisible } = useProduct();

    if (!isUserLoginVisible) {
        return null;
      }
  return (
    <div className='login-page'>
        <button
        className="close-background"
        onClick={toggleUserLoginVisibility}
      ></button>
      <div className="login-modal">
        <h2>Login</h2>
        <input type="text" placeholder={"User Name"} />
        <input type="password"placeholder={"Password"} />
        <button>Login</button>
      </div>
    </div>
  )
}

export default UserLogin
