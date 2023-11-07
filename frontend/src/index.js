import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MainPage from './pages/MainPage';
import RegisterPage from './pages/RegisterPage'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainPage />
  </React.StrictMode>
);
