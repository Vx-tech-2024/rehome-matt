// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAPsHVtkK1p1hiKfgcJbW1AQHJlYSm3Hhw",
  authDomain: "rehome-matt.firebaseapp.com",
  projectId: "rehome-matt",
  storageBucket: "rehome-matt.firebasestorage.app",
  messagingSenderId: "164764212406",
  appId: "1:164764212406:web:0da9b1e0e83047d841da17",
  // etc. — paste full config here
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
