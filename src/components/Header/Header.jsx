import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header-wrapper">
      <img src="/cloudwave3.png" alt="Olive Young" className="logo" />
      <div className="search-bar">
        <input type="text" placeholder="상품명, 브랜드명 검색" className="search-input" />
        <span>🔍</span>
      </div>
      <nav className="nav-menu">
        <Link to="/login" className="nav-item">로그인</Link>
        <a href="#" className="nav-item">회원가입</a>
        <a href="#" className="nav-item">장바구니</a>
        <a href="#" className="nav-item">주문배송</a>
        <a href="#" className="nav-item">고객센터</a>
        <a href="#" className="nav-item">매장안내</a>
        <a href="#" className="nav-item">Global</a>
      </nav>
    </header>
  );
};

export default Header;