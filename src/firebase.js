// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAxHG8kVa4KIhqhDcxqlw4ecnxYcsC-7jw",
  authDomain: "cursor-first-app-b9508.firebaseapp.com",
  projectId: "cursor-first-app-b9508",
  storageBucket: "cursor-first-app-b9508.firebasestorage.app",
  messagingSenderId: "676140865645",
  appId: "1:676140865645:web:1fd08ebb1df66853ab4764",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };

