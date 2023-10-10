import React from "react";
import { useProduct } from "./ProductContext";
import '../styles/Cart.css'

const Cart =() => {
    const { cart, isCartVisible } = useProduct();
    const { toggleCartVisibility } = useProduct();
    
  if (!isCartVisible) {
    return null; 
  }

  return (
    <div className="cart-container">
      <div className="cart-title">
      <h2>Sepetim</h2>
      <button onClick={toggleCartVisibility}>X</button>
      </div>
      <ul>
        {cart.map((product) => (
          <li key={product.id}>
            <img src={product.productImg} alt="" />
            <h3>{product.productName}</h3>
            <p>Fiyat: ${product.productPrice}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
