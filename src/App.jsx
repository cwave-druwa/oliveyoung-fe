// import React from 'react';
// import { HashRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './pages/Home/Home';
// import Challenge from './pages/Challenge/Challenge';
// import GlobalStyle from './styles/globalStyles';

// function App() {
//   return (
//     <Router>
//       <GlobalStyle />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/셔터" element={<Challenge />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

//위에는 기본

// import React from 'react';
// import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Home from './pages/Home/Home';
// import Challenge from './pages/Challenge/Challenge';
// import GlobalStyle from './styles/globalStyles';
// import { AuthProvider } from './contexts/AuthContext';
// import useAuth from './hooks/useAuth';

// const ProtectedRoute = ({ children }) => {
//   const { isLoggedIn } = useAuth();
//   return isLoggedIn ? children : <Navigate to="/" />;
// };

// function App() {
//   return (
//     <AuthProvider>
//       <Router>
//         <GlobalStyle />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route 
//             path="/셔터" 
//             element={
//               <ProtectedRoute>
//                 <Challenge />
//               </ProtectedRoute>
//             } 
//           />
//         </Routes>
//       </Router>
//     </AuthProvider>
//   );
// }

// export default App;


//위에는 기본 로그인


// import React, { useEffect } from 'react';
// import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import { Amplify } from 'aws-amplify';
// import { Hub } from 'aws-amplify/utils'; // 여기를 수정했습니다
// import { fetchAuthSession } from 'aws-amplify/auth';
// import Home from './pages/Home/Home';
// import Challenge from './pages/Challenge/Challenge';
// import GlobalStyle from './styles/globalStyles';
// import { AuthProvider } from './contexts/AuthContext';
// import useAuth from './hooks/useAuth';
// import awsconfig from './aws-exports';

// Amplify.configure(awsconfig);

// const ProtectedRoute = ({ children }) => {
//   const { isLoggedIn } = useAuth();
//   return isLoggedIn ? children : <Navigate to="/" />;
// };

// function App() {
//   useEffect(() => {
//     const listener = Hub.listen('auth', ({ payload: { event, data } }) => {
//       switch (event) {
//         case 'signedIn':
//           console.log('user signed in');
//           break;
//         case 'signedOut':
//           console.log('user signed out');
//           break;
//         case 'customOAuthState':
//           console.log('custom state', data);
//       }
//     });

//     fetchAuthSession()
//       .then(session => console.log({ session }))
//       .catch(() => console.log('Not signed in'));

//     return () => listener(); // Clean up the listener
//   }, []);

//   return (
//     <AuthProvider>
//       <Router>
//         <GlobalStyle />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route 
//             path="/셔터" 
//             element={
//               <ProtectedRoute>
//                 <Challenge />
//               </ProtectedRoute>
//             } 
//           />
//         </Routes>
//       </Router>
//     </AuthProvider>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Amplify } from 'aws-amplify';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Home from './pages/Home/Home';
import Challenge from './pages/Challenge/Challenge';
import AuthHandler from './components/AuthHandler';
import awsconfig from './aws-exports';

Amplify.configure({
  ...awsconfig,
  Auth: {
    mandatorySignIn: false,
    region: awsconfig.aws_cognito_region,
    userPoolId: awsconfig.aws_user_pools_id,
    userPoolWebClientId: awsconfig.aws_user_pools_web_client_id,
    oauth: awsconfig.oauth
  }
});

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? children : <Navigate to="/" />;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <AuthHandler />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/셔터" element={<Challenge />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;