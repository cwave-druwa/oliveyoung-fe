import React from 'react';
import { Link } from 'react-router-dom';
import './CategoryNav.css';

const CategoryNav = () => {
  const categories = [
    { name: '셔터', icon: 'video-icon', endpoint: 'shutter' },
    { name: '3D', icon: 'threed-icon', endpoint: '3d' }
  ];

  return (
    <nav className="category-nav-wrapper">
      {categories.map((category, index) => (
        <Link key={index} to={`/${category.endpoint}`} className="category-nav-item">
          <span className={`${category.icon} animate-pulse`}></span>
          <span className="category-name">{category.name}</span>
        </Link>
      ))}
    </nav>
  );
};

export default CategoryNav;