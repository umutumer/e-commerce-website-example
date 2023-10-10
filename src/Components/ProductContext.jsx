import React, { createContext, useContext, useState } from "react";
import products from "../data/Data";

const ProductContext = createContext();

export const ProductProvider =  ({ children }) => {
  const [cart, setCart] = useState([]);
  const [productsData] = useState(products);
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(0);
  const[isUserLoginVisible,setIsUserLoginVisible] = useState(false)



  const addToCart = (productId) => {
    const product = productsData.find((item) => item.id === productId);
    if (product) {
      setCart([...cart, product]);
      setCartItemCount(cartItemCount + 1);
    }
  };
  const toggleCartVisibility = () => {
    setIsCartVisible(!isCartVisible);
  };
  const toggleUserLoginVisibility = () =>{
    setIsUserLoginVisible(!isUserLoginVisible)
  }

  return (
    <ProductContext.Provider  value={{ productsData, cart, addToCart, toggleCartVisibility,toggleUserLoginVisibility,isCartVisible,isUserLoginVisible,cartItemCount}}>
      {children}
    </ProductContext.Provider>
  );
}

export const useProduct = () => {
  return useContext(ProductContext);
}
