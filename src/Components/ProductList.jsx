import React from "react";
import { useProduct } from "./ProductContext";
import '../styles/ProductList.css'
import 'react-toastify/dist/ReactToastify.css';

const ProductList = () => {
  const { productsData, addToCart } = useProduct();

  return (
    <div >
      <h2 style={{textAlign: "center",margin:"50px",fontSize:"40px"}}>Ürünler</h2>
      <ul className="product-content">
        {productsData.map((product) => (
          <li  className='product-card-container' key={product.id}>
            <img src={product.productImg} alt="" />
            <h3>{product.productName}</h3>
            <p>Fiyat: ${product.productPrice}</p>
            <button className='product-cart-btn' onClick={() => addToCart(product.id)}>Sepete Ekle</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
