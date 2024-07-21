
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Top from './Components/Top/Top';
import Footer from './Components/Footer/Footer';
import Shop from './pages/Shop';
import LoginSignup from './pages/LoginSignup';
import Product from './pages/Product';
import WishList from './pages/WishList';
import Cart from './pages/Cart';
import Category from './pages/Category';
import { CartProvider } from './contexts/CartContext';
import { WishlistProvider } from './contexts/WishlistContext';
import './App.css';

const Layout = ({ children, onSearchChange }) => {
  const location = useLocation();
  const noHeaderFooterRoutes = ['/signup', '/login']; 

  const shouldHideHeaderFooter = noHeaderFooterRoutes.includes(location.pathname);

  return (
    <>
      {!shouldHideHeaderFooter && <Top />}
      {children}
      {!shouldHideHeaderFooter && <Footer />}
    </>
  );
};

const App = () => {
  const [searchKeyword, setSearchKeyword] = useState('');

  const handleSearchChange = (newSearchKeyword) => {
    setSearchKeyword(newSearchKeyword);
  };

  return (
    <WishlistProvider>
      <CartProvider>
        <Router>
          <Routes>
            <Route
              path="*"
              element={
                <Layout onSearchChange={handleSearchChange}>
                  <Routes>                  
                    <Route path="/signup" element={<LoginSignup />} />
                    <Route path="/" element={<Shop />} />
                    <Route path="/product/:id" element={<Product />} />
                    <Route path="/wishlist" element={<WishList />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/category" element={<Category searchKeyword={searchKeyword} />} />
                  </Routes>
                </Layout>
              }
            />
          </Routes>
        </Router>
      </CartProvider>
    </WishlistProvider>
  );
};

export default App;
