import React from 'react';
import './ProductList.css';
import useProducts from '../../hooks/useProducts';

const ProductList = () => {
  const { products, loading, error, toggleLike } = useProducts();

  const handleProductClick = (id) => {
    if (id === 4) {
      alert("건물을 구매하시려면 센터장님의 동의서를 받아오셔야 합니다.");
    } else {
      alert("죄송합니다. 상품 구매 기능은 추후 서비스 예정입니다.");
    }
  };

  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error}</div>;

  return (
    <div className="product-list-wrapper">
      <h2 className="section-title">오늘의 추천 상품</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card" onClick={() => handleProductClick(product.id)}>
            <img src={product.imageURL} alt={product.productName} className="product-image" />
            <div className="product-info">
              <h3 className="product-name">{product.productName}</h3>
              <p className="product-price">
                <span className="original-price">{product.productPrice.toLocaleString()}원</span>
                <span className="discount-price">
                  {Math.round(product.productPrice * (100 - product.sale) / 100).toLocaleString()}원
                </span>
              </p>
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
        ))}
      </div>
    </div>
  );
};

export default ProductList;