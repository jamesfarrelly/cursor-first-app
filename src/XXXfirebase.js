// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxHG8kVa4KIhqhDcxqlw4ecnxYcsC-7jw",
  authDomain: "cursor-first-app-b9508.firebaseapp.com",
  projectId: "cursor-first-app-b9508",
  storageBucket: "cursor-first-app-b9508.firebasestorage.app",
  messagingSenderId: "676140865645",
  appId: "1:676140865645:web:1fd08ebb1df66853ab4764",
  measurementId: "G-VNL7SVJQVW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
