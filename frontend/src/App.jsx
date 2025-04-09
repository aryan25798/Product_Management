import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import ProductList from './components/Products/ProductList';
import ProductForm from './components/Products/ProductForm';
import { isAuthenticated } from './utils/auth';

const App = () => (
  <Router>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/products" element={isAuthenticated() ? <ProductList /> : <Navigate to="/login" />} />
      <Route path="/products/new" element={isAuthenticated() ? <ProductForm /> : <Navigate to="/login" />} />
    </Routes>
  </Router>
);

export default App;
