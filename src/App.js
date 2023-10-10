import React from "react";
import { ProductProvider } from "./Components/ProductContext";
import ProductList from "./Components/ProductList";
import Cart from "./Components/Cart";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";

function App() {
  return (
    <ProductProvider>
      <div>
        <Navbar />
        <Home />
        <ProductList />
        <Cart />
      </div>
    </ProductProvider>
  );
}

export default App;
