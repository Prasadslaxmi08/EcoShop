import React, { useState } from 'react';
import './Product.css';

const Product = () => {
  const [expandedProduct, setExpandedProduct] = useState(null);

  const handleViewProduct = (index) => {
    setExpandedProduct(expandedProduct === index ? null : index);
  };

  const products = [
    {
      name: 'Product 1',
      price: '19.99',
      image: 'eco1.jpeg',
      details: 'Step into comfort and style with our eco-friendly shoes, made from sustainable materials and designed for durability and trendsetting flair.'
    },
    {
      name: 'Product 2',
      price: '29.99',
      image: 'eco22.jpeg',
      details: 'Pack your meals in our sustainable lunch boxes, crafted from eco-conscious materials to keep your food fresh and your environmental impact low.'
    },
    {
      name: 'Product 3',
      price: '29.99',
      image: 'eco3.jpeg',
      details: 'Details about product 3'
    },
    {
      name: 'Product 4',
      price: '29.99',
      image: 'eco4.jpeg',
      details: 'Details about product 4'
    },
    {
      name: 'Product 5',
      price: '29.99',
      image: 'eco5.jpeg',
      details: 'Details about product 5'
    },
    {
      name: 'Product 6',
      price: '29.99',
      image: 'eco66.jpeg',
      details: 'Details about product 6'
    },
    {
      name: 'Product 7',
      price: '29.99',
      image: 'eco77.jpeg',
      details: 'Details about product 7'
    },
    {
      name: 'Product 8',
      price: '29.99',
      image: 'eco8.jpeg',
      details: 'Details about product 8'
    },
  ];

  return (
    <div className="product-page">
      <h1 className="heading">Browse Our EcoShop Products</h1>
      <div className="filters">
        <div className="categories">
          <button>All Items</button>
          <button>Food</button>
          <button>Clothing</button>
          <button>Health</button>
          <button>Decor</button>
        </div>
        <div className="filter-options">
          <span className="filter-text">Filters</span>
          <i className="filter-icon">🔍</i> {/* Replace with an actual icon from a library if desired */}
        </div>
      </div>
      <div className="product-grid">
        {products.map((product, index) => (
          <div className={product-card ${expandedProduct === index ? 'expanded' : ''}} key={index}>
            <div className="image-container">
              <img
                src={product.image}
                alt={product.name}
              />
            </div>
            <button className="view-product-button" onClick={() => handleViewProduct(index)}>
              {expandedProduct === index ? 'Hide Details' : 'View Product'}
            </button>
            {expandedProduct === index && (
              <div className="product-details">
                <div className="product-details-right">
                  <p>Name: {product.name}</p>
                  <p>Price: {product.price}</p>
                  <p>{product.details}</p>
                  <button className="wishlist-button">
                    Wishlist ❤️
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="load-more-container">
        <button className="load-more-button">Load More</button>
      </div>
    </div>
  );
};

export default Product;