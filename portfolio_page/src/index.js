import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import './styles/animation.css';
import './styles/tablet.css';
import './styles/mobile.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
