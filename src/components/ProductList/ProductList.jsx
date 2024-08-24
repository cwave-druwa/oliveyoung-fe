import React from 'react';
import './ProductList.css';

const ProductList = () => {
  const products = [
    { id: 1, name: "상품 1", price: "12,000원", image: "/cj-olivenetworks.png" },
    { id: 2, name: "상품 2", price: "9,900원", image: "/cloudwave3.png" },
    { id: 3, name: "상품 3", price: "5,900원", image: "/news2.png" },
    { id: 4, name: "상품 4", price: "35,900원", image: "/people.jpg" },
  ];

  return (
    <div className="product-list-wrapper">
      <h2 className="section-title">오늘의 추천 상품</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;