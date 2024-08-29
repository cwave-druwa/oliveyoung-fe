import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import GlobalStyle from './styles/globalStyles';
import Header from './components/Header/Header';
import Login from './pages/Login/Login';

function App() {
  return (
    <Router> {/* Router 컴포넌트로 Routes를 감싸줘야 합니다. */}
      <GlobalStyle /> {/* 전역 스타일을 적용 */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
    </Router>
  );
}
export default App;