import App from './App';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

createRoot(document.getElementById('root')).render(
    <App />
);