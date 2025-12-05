// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar.jsx";
import ItemListContainer from "./containers/ItemListContainer.jsx";
import ItemDetailContainer from "./containers/ItemDetailContainer.jsx";
import Cart from "./components/Cart.jsx";
import Checkout from "./components/Checkout.jsx";

const App = () => {
  return (
    <div>
      <NavBar />

      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<h2>Página no encontrada - 404</h2>} />
      </Routes>
    </div>
  );
};

export default App;
