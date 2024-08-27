// import './CategoryNav.css';

// const CategoryNav = () => {
//   const categories = ['셔터'];

//   return (
//     <nav className="nav-wrapper">
//       {categories.map((category, index) => (
//         <a key={index} href={`/#${encodeURIComponent(category)}`} className="nav-item">
//           <span className="video-icon"></span> {/* 아이콘 추가 */}
//           {category}
//         </a>
//       ))}
//     </nav>
//   );
// };

// export default CategoryNav;
import React from 'react';
import { Link } from 'react-router-dom';
import './CategoryNav.css';

const CategoryNav = () => {
  const categories = ['셔터'];

  return (
    <nav className="nav-wrapper">
      {categories.map((category, index) => (
        <Link key={index} to={`/${encodeURIComponent(category)}`} className="nav-item">
          <span className="video-icon"></span>
          {category}
        </Link>
      ))}
    </nav>
  );
};

export default CategoryNav;