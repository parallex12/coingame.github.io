import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import ProductDetail from "./pages/ProductDetail";
import SubProductsPage from "./pages/SubProductsPage";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/sub_products/:id" element={<SubProductsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
