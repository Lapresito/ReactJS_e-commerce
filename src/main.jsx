import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlY3SVvQG204RirCtevXLWB7BnnsHgDyA",
  authDomain: "unniversse-6a90a.firebaseapp.com",
  projectId: "unniversse-6a90a",
  storageBucket: "unniversse-6a90a.appspot.com",
  messagingSenderId: "702189314225",
  appId: "1:702189314225:web:4422e87e2f87fbd2adc290"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
    <App />
    </ChakraProvider >
  </React.StrictMode>
)
