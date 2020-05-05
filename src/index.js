import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './components/Header';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <div className="container">
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById('root'),
);
