// import React, { createContext, useState, useEffect } from 'react';
// import { signIn, signOut, getCurrentUser } from 'aws-amplify/auth';

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     checkUser();
//   }, []);

//   async function checkUser() {
//     try {
//       const user = await getCurrentUser();
//       setIsLoggedIn(true);
//       setUser(user);
//     } catch (error) {
//       setIsLoggedIn(false);
//       setUser(null);
//     }
//   }

//   async function login() {
//     try {
//       await signIn();
//     } catch (error) {
//       console.log('error signing in', error);
//     }
//   }

//   async function logout() {
//     try {
//       await signOut();
//       setIsLoggedIn(false);
//       setUser(null);
//     } catch (error) {
//       console.log('error signing out: ', error);
//     }
//   }

//   return (
//     <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
// src/contexts/AuthContext.jsx
import React, { createContext, useState, useEffect, useContext } from 'react';
import { getCurrentUser, signOut, fetchAuthSession } from 'aws-amplify/auth';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    checkAuthState();
  }, []);

  async function checkAuthState() {
    try {
      const user = await getCurrentUser();
      const session = await fetchAuthSession();
      setIsLoggedIn(true);
      setUser(user);
    } catch (error) {
      setIsLoggedIn(false);
      setUser(null);
    }
  }

  const login = (userData) => {
    setIsLoggedIn(true);
    setUser(userData);
  };

  const logout = async () => {
    try {
      await signOut();
      setIsLoggedIn(false);
      setUser(null);
    } catch (error) {
      console.error('Error signing out: ', error);
    }
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout, checkAuthState }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);