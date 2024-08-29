import React from 'react';
import ReactDOM from 'react-dom';
import { Amplify } from 'aws-amplify';
import awsConfig from './awsconfig';
import App from './App';
import { createRoot } from 'react-dom/client';
import './index.css';

Amplify.configure(awsConfig);

createRoot(document.getElementById('root')).render(
    <App />
);