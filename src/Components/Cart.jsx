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
          <h2>Cart</h2>
          <button onClick={toggleCartVisibility}>X</button>
        </div>
        <div className="cart-content">
          <ul>
            {cart.map((car) => (
              <li key={car.id}>
                <img src={car.productImg} alt="" />
                <h3>{car.productName}</h3>
                <p>Fiyat: ${car.productPrice}</p>
              </li>
            ))}
          </ul>
        </div>
        {cartItemCount > 0 &&
        <button className="pay-btn">Pay Now</button>}
        {cartItemCount === 0 && <p style={{color: "GrayText"}} >Cart is Empty</p> }
      </div>
    </div>
  );
};

export default Cart;
