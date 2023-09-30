// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9rIwhEWLgO7uW9jNga-NQnGhsN3zPcH0",
  authDomain: "ott-gpt-ffcc3.firebaseapp.com",
  projectId: "ott-gpt-ffcc3",
  storageBucket: "ott-gpt-ffcc3.appspot.com",
  messagingSenderId: "791397658465",
  appId: "1:791397658465:web:d7d92525833e130d83df20",
  measurementId: "G-2YEZ1D8D8G",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
