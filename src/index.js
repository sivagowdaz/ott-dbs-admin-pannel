import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AuthProvider from './context/authcontext/AuthContext';
import { UserContextProvider } from './context/usercontext/UserContext';


ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
