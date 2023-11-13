import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/" element={<MainPage />} />
            </Routes>
        </Router>
    );
};

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
