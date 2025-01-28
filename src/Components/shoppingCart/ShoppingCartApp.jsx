import React from "react";
import { Route, Routes } from "react-router-dom";
import CartHome from "./pages/home";
import Cart from "./pages/cart";
import CartNavbar from "./CartNavbar/CartNavbar";
import ItemDetails from "./pages/itemDetails";


const ShoppingCartApp = () => {
  return (
    <div>
      <CartNavbar/>
      <Routes>
        <Route exact path="/" element={<CartHome/>} />
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/itemDetails/:id" element={<ItemDetails/>}/>
      </Routes>
    </div>
  );
};

export default ShoppingCartApp;
