
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
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
      {!shouldHideHeaderFooter && <Top onSearchChange={onSearchChange} />}
      {children}
      {!shouldHideHeaderFooter && <Footer />}
    </>
  );
};

const ProtectedRoute = ({ element: Component, isAuthenticated, ...rest }) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate, location]);

  return isAuthenticated ? <Component {...rest} /> : null;
};

const App = () => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSearchChange = (newSearchKeyword) => {
    setSearchKeyword(newSearchKeyword);
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
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
                    <Route path="signup" element={<LoginSignup onLogin={handleLogin} />} />
                    <Route path="login" element={<LoginSignup onLogin={handleLogin} />} />
                    <Route path="/" element={<ProtectedRoute element={Shop} isAuthenticated={isAuthenticated} />} />
                    <Route path="product/:id" element={<ProtectedRoute element={Product} isAuthenticated={isAuthenticated} />} />
                    <Route path="wishlist" element={<ProtectedRoute element={WishList} isAuthenticated={isAuthenticated} />} />
                    <Route path="cart" element={<ProtectedRoute element={Cart} isAuthenticated={isAuthenticated} />} />
                    <Route path="category" element={<ProtectedRoute element={Category} isAuthenticated={isAuthenticated} searchKeyword={searchKeyword} />} />
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
