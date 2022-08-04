import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCxNKh4Nv6Pj7p1nG4uDQmkDqPudfsZ4Tc",
  authDomain: "gusto-cafe-d5041.firebaseapp.com",
  projectId: "gusto-cafe-d5041",
  storageBucket: "gusto-cafe-d5041.appspot.com",
  messagingSenderId: "222214026349",
  appId: "1:222214026349:web:0f8e0f485eca4e0c703b64"
};


initializeApp(firebaseConfig);

const root =ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
