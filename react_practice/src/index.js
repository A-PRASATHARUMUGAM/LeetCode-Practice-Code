import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Comments from './Comments';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> 
    <App />
    <Comments/>
  </React.StrictMode>
);

 
