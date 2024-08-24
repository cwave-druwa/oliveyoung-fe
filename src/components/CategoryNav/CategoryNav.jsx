import './CategoryNav.css';

const CategoryNav = () => {
  const categories = ['카테고리', '오특', '랭킹', 'LUXE EDIT', '기획전', '세일', '기프트카드', '멤버십/쿠폰', '이벤트'];

  return (
    <nav className="nav-wrapper">
      {categories.map((category, index) => (
        <a key={index} href={`/${encodeURIComponent(category)}`} className="nav-item">{category}</a>
      ))}
    </nav>
  );
};

export default CategoryNav;