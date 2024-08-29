import React from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { useNavigate } from 'react-router-dom';
import { Amplify } from 'aws-amplify';
import awsConfig from '../../awsconfig';

const Login = () => {
  const navigate = useNavigate();

  return (
    <Authenticator>
      {({ signOut, user }) => (
        <div>
          <h1>Welcome {user.username}</h1>
          <button onClick={() => {
            signOut();
            navigate('/');
          }}>Sign out</button>
        </div>
      )}
    </Authenticator>
  );
};

export default Login;