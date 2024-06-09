import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Hyderabad from './Hyderabad'
import Product from './Product'
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} /> {/* Set Login as initial landing page */}
        <Route path="/home" element={<Home />} /> {/* Home page route */}
        <Route path="/location1" element={<Hyderabad />} /> {/* Hyderabad page route */}
        <Route path="/products" element={<Product />} /> {/* Hyderabad page route */}
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;