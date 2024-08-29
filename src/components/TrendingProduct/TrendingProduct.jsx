import React, { useState, useEffect } from 'react';
import './TrendingProduct.css';

const TrendingProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts([
      { id: 1, name: '인기 상품 1', price: 15000, image: '/product1.jpg' },
      { id: 2, name: '인기 상품 2', price: 25000, image: '/product2.jpg' },
      { id: 3, name: '인기 상품 3', price: 18000, image: '/product3.jpg' },
      { id: 4, name: '인기 상품 4', price: 22000, image: '/product4.jpg' },
    ]);
  }, []);

  return (
    <section className="trending-products">
      <h2 className="section-title">인기 상품</h2>
      <div className="product-slider">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">{product.price.toLocaleString()}원</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingProducts;