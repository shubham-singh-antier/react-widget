import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const widgetDivs = document.querySelectorAll('.nicoraynaud-finance-widget');
widgetDivs.forEach(div => {
root.render(
  <React.StrictMode>
    <App symbol={div.dataset.symbol} />
  </React.StrictMode>
)
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
