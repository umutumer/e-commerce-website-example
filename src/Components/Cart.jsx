import React from "react";
import { useProduct } from "./ProductContext";
import "../styles/Cart.css";

const Cart = () => {
  const { cart, isCartVisible } = useProduct();
  const { toggleCartVisibility } = useProduct();
  const{ cartItemCount} = useProduct(0);

  if (!isCartVisible) {
    return null;
  }

  return (
    <div className="cart-section">
      <button
        className="close-background"
        onClick={toggleCartVisibility}
      ></button>
      <div className="cart-container">
        <div className="cart-title">
          <h2>Sepetim</h2>
          <button onClick={toggleCartVisibility}>X</button>
        </div>
        <div className="cart-content">
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
        {cartItemCount > 0 &&
        <button className="pay-btn">Pay Now</button>}
      </div>
    </div>
  );
};

export default Cart;
