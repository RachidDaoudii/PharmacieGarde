// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhIof1KOcbUmzjtUJ2ic2mZCiRFRPmd8Q",
  authDomain: "login-39561.firebaseapp.com",
  databaseURL: "https://login-39561-default-rtdb.firebaseio.com",
  projectId: "login-39561",
  storageBucket: "login-39561.appspot.com",
  messagingSenderId: "389979931733",
  appId: "1:389979931733:web:d59bac034af88baf9fc0dc",
  measurementId: "G-PJWSFMNBE9",
};

// Initialize Firebase
export const APP_FIREBASE = initializeApp(firebaseConfig);
export const APP_AUTH = getAuth(APP_FIREBASE);
export const DB_FIRESTORE = getStorage(APP_FIREBASE);
export const analytics = getAnalytics(APP_FIREBASE);
