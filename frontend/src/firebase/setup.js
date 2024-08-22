// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4xmpkSoOp7FPNcjtodQWhxe6d0m92pwg",
  authDomain: "newton-notice-board.firebaseapp.com",
  projectId: "newton-notice-board",
  storageBucket: "newton-notice-board.appspot.com",
  messagingSenderId: "872457315021",
  appId: "1:872457315021:web:41c15adce36160e93cbf84",
  measurementId: "G-MSYKHTLQ1N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)