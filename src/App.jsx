import 'react-router-dom';
import Home from './pages/Home/Home';
import GlobalStyle from './styles/globalStyles';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Routes와 Route 추가

function App() {
  return (
    <Router> {/* Router 컴포넌트로 Routes를 감싸줘야 합니다. */}
      <GlobalStyle /> {/* 전역 스타일을 적용 */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
    </Router>
  );
}
export default App;