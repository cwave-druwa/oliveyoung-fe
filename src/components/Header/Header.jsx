// import { Link } from 'react-router-dom';
// import './Header.css';
// import useOnlineUsers from '../../hooks/user';  // user.js에서 가져오기

// const Header = () => {
//   const onlineUsers = useOnlineUsers();  // 현재 접속자 수 가져오기
//   return (
//     <header className="header-wrapper">
//       <Link to="/">
//         <img src="/Oliveyoung-Logo.jpg" alt="Olive Young" className="logo" />
//       </Link>
//       <div className="online-users">
//           현재 접속자: {onlineUsers}명
//       </div>
//       <div className="search-bar">
//         <input type="text" placeholder="상품명, 브랜드명 검색" className="search-input" />
//         <span>🔍</span>
//       </div>
//       <nav className="nav-menu">
//         <a href="https://olive0-druwa.auth.ap-northeast-2.amazoncognito.com/login?client_id=3fk8aqddpevs8m30pduaffmfrg&response_type=code&scope=email+openid+phone&redirect_uri=https%3A%2F%2Folive0-druwa.com" className="nav-item">로그인</a>
//         <a href="https://olive0-druwa.auth.ap-northeast-2.amazoncognito.com/login?client_id=3fk8aqddpevs8m30pduaffmfrg&response_type=code&scope=email+openid+phone&redirect_uri=https%3A%2F%2Folive0-druwa.com" className="nav-item">회원가입</a>
//       </nav>
//     </header>
//   );
// };
// export default Header;

//위에는 기본

// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Header.css';
// import useAuth from '../../hooks/useAuth';
// import useOnlineUsers from '../../hooks/user';

// const Header = () => {
//   const { isLoggedIn, logout } = useAuth();
//   const onlineUsers = useOnlineUsers();

//   const handleLogout = () => {
//     logout();
//     // Redirect to Cognito logout URL if needed
//     // window.location.href = 'YOUR_COGNITO_LOGOUT_URL';
//   };

//   return (
//     <header className="header-wrapper">
//       <Link to="/">
//         <img src="/Oliveyoung-Logo.jpg" alt="Olive Young" className="logo" />
//       </Link>
//       <div className="online-users">
//         현재 접속자: {onlineUsers}명
//       </div>
//       <div className="search-bar">
//         <input type="text" placeholder="상품명, 브랜드명 검색" className="search-input" />
//         <span>🔍</span>
//       </div>
//       <nav className="nav-menu">
//         {isLoggedIn ? (
//           <a href="#" onClick={handleLogout} className="nav-item">로그아웃</a>
//         ) : (
//           <>
//             <a href="https://olive0-druwa.auth.ap-northeast-2.amazoncognito.com/login?client_id=3fk8aqddpevs8m30pduaffmfrg&response_type=code&scope=email+openid+phone&redirect_uri=https%3A%2F%2Folive0-druwa.com" className="nav-item">로그인</a>
//             <a href="https://olive0-druwa.auth.ap-northeast-2.amazoncognito.com/login?client_id=3fk8aqddpevs8m30pduaffmfrg&response_type=code&scope=email+openid+phone&redirect_uri=https%3A%2F%2Folive0-druwa.com" className="nav-item">회원가입</a>
//           </>
//         )}
//       </nav>
//     </header>
//   );
// };

// export default Header;

//위에는 일반 로그인

import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { useAuth } from '../../contexts/AuthContext';
import useOnlineUsers from '../../hooks/user';
import { signInWithRedirect } from 'aws-amplify/auth';

const Header = () => {
  const { isLoggedIn, logout } = useAuth();
  const onlineUsers = useOnlineUsers();

  const handleSignUp = () => {
    signInWithRedirect();
  };

  const handleLogin = () => {
    signInWithRedirect();
  };

  return (
    <header className="header-wrapper">
      <Link to="/">
        <img src="/Oliveyoung-Logo.jpg" alt="Olive Young" className="logo" />
      </Link>
      <div className="search-bar">
        <input type="text" placeholder="상품명, 브랜드명 검색" className="search-input" />
        <span>🔍</span>
      </div>
      <nav className="nav-menu">
        {isLoggedIn ? (
          <a href="#" onClick={logout} className="nav-item">로그아웃</a>
        ) : (
          <>
            <a href="#" onClick={handleLogin} className="nav-item">로그인</a>
            <a href="#" onClick={handleSignUp} className="nav-item">회원가입</a>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;