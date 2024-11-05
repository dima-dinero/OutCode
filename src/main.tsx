import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import './locales';
import i18n from './locales';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);