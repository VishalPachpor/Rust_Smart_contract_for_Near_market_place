import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeContract } from "./utils/near";

import "bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
window.nearInitPromise = initializeContract()
.then(()=> {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
})

.catch(console.error);



