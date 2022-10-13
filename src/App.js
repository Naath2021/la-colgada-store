import React from 'react'
import "../src/scss/app.scss";
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/pages/home/Home';
import Products from "./components/pages/products/Products"
import ProductDetailContainer from './components/pages/products/productDetail/ProductDetailContainer';
import Faq from './components/pages/faq/Faq';
import CategoryContainer from './components/products/categories/CategoryContainer';
import Footer from './components/footer/Footer';
import CartInfoProvider from './context/CartInfoProvider';
import OrderCheckoutContainer from './components/cart/orderCheckout/OrderCheckoutContainer';

function App() {
  return (
    <CartInfoProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="products/item/:id" element={<ProductDetailContainer />} />
          <Route path="products/category/:category" element={<CategoryContainer />} />
          <Route path='preguntas-frecuentes' element={<Faq />} />
          <Route path='checkout' element={<OrderCheckoutContainer />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartInfoProvider>
  );
}

export default App;