// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsG116lhW7eSU9LRe2G37VNfDqQ1WzHso",
  authDomain: "react-dragon-news-auth-14391.firebaseapp.com",
  projectId: "react-dragon-news-auth-14391",
  storageBucket: "react-dragon-news-auth-14391.appspot.com",
  messagingSenderId: "110683578097",
  appId: "1:110683578097:web:cacd32fc99d77af8139350"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app