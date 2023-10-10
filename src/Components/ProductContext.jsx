import React, { createContext, useContext, useState } from "react";
import products from "../data/Data";

const ProductContext = createContext();

export const ProductProvider =  ({ children }) => {
  const [cart, setCart] = useState([]);
  const [productsData] = useState(products);
  const [isCartVisible, setIsCartVisible] = useState(false);


  const addToCart = (productId) => {
    const product = productsData.find((item) => item.id === productId);
    if (product) {
      setCart([...cart, product]);
    }
  };
  const toggleCartVisibility = () => {
    setIsCartVisible(!isCartVisible);
  };

  return (
    <ProductContext.Provider  value={{ productsData, cart, addToCart, toggleCartVisibility, isCartVisible }}>
      {children}
    </ProductContext.Provider>
  );
}

export const useProduct = () => {
  return useContext(ProductContext);
}
