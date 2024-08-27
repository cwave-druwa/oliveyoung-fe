import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { getCurrentUser, fetchAuthSession } from 'aws-amplify/auth';
import { useAuth } from '../contexts/AuthContext';

function AuthHandler() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const authCode = urlParams.get('code');

    async function handleAuth() {
      if (authCode) {
        try {
          const session = await fetchAuthSession();
          const user = await getCurrentUser();
          console.log("Current session:", session);
          console.log("Current user:", user);
          login(user);
          navigate('/', { replace: true });
        } catch (error) {
          console.error('Failed to initialize session:', error);
        }
      }
    }

    handleAuth();
  }, [location, navigate, login]);

  return null;
}

export default AuthHandler;