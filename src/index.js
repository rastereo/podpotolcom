import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter basename='podpotolcom'> {/* basename='podpotolcom' нужен только на gh-pages */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
