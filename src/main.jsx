import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0zK5XSGw3WBfU7gZAPlG87INstp3JEpg",
  authDomain: "vapestore-1d0c9.firebaseapp.com",
  projectId: "vapestore-1d0c9",
  storageBucket: "vapestore-1d0c9.appspot.com",
  messagingSenderId: "294191627796",
  appId: "1:294191627796:web:951ffa692da88ebfa23101"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
