import React from "react";
import { ProductProvider } from "./Components/ProductContext";
import ProductList from "./Components/ProductList";
import Cart from "./Components/Cart";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import UserLogin from "./Components/UserLogin";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <ProductProvider>
      <div>
        <Navbar />
        <ToastContainer/>
        <Home />
        <ProductList />
        <Cart />
        <UserLogin />
      </div>
    </ProductProvider>
  );
}

export default App;
