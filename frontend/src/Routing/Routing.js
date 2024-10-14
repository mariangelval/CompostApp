import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import ProductDetail from "../components/Products/ProductDetail";
import Cart from "../components/Cart/Cart";
import { CartProvider } from "../Context/CartContext";
import Inicio from "../pages/gobierno/Inicio";
import Escuelas from "../pages/gobierno/Escuelas";
import Solicitud from "../pages/escuela/Solicitud";
import Historial from "../pages/escuela/Historial";

function Routing() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dash" element={<Inicio />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/escuelas" element={<Escuelas />} />
          <Route path="/solicitud" element={<Solicitud />} />
          <Route path="/historial" element={<Historial />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default Routing;
