import React from 'react';
import './ProductList.css';
import useProducts from '../../hooks/useProducts';

const ProductList = ({ title }) => {
  const { products, loading, error, toggleLike } = useProducts();

  const handleProductClick = (id) => {
    if (id === 4) {
      alert("건물을 구매하시려면 테크,옵스,DT 팀장님들의 동의서를 받아오셔야합니다.");
    } else {
      alert("죄송합니다. 상품 구매 기능은 추후 서비스 예정입니다.");
    }
  };

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="product-list-wrapper">
      <h2 className="section-title">{title}</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card" onClick={() => handleProductClick(product.id)}>
            <div className="product-image-container">
              <img src={product.imageURL} alt={product.productName} className="product-image" />
              <div className="product-overlay">
                <button 
                  className={`like-button ${product.isLiked ? 'liked' : ''}`} 
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleLike(product.id);
                  }}
                >
                  {product.isLiked ? '❤️' : '🤍'}
                </button>
              </div>
            </div>
            <div className="product-info">
              <h3 className="product-name">{product.productName}</h3>
              <p className="product-price">
                <span className="original-price">{product.productPrice.toLocaleString()}원</span>
                <span className="discount-price">
                  {Math.round(product.productPrice * (100 - product.sale) / 100).toLocaleString()}원
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;