import React from 'react';
import './FeaturedCategories.css';

const FeaturedCategories = () => {
  const categories = [
    { name: '스킨케어', image: '/skincare.jpg' },
    { name: '메이크업', image: '/makeup.jpg' },
    { name: '바디케어', image: '/bodycare.jpg' },
    { name: '헤어케어', image: '/haircare.jpg' },
  ];

  return (
    <section className="featured-categories">
      <h2 className="section-title">인기 카테고리</h2>
      <div className="category-grid">
        {categories.map((category, index) => (
          <div key={index} className="category-item">
            <img src={category.image} alt={category.name} className="category-image" />
            <h3 className="category-name">{category.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCategories;