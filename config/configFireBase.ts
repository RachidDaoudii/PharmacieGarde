import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
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

export const APP_FIREBASE = initializeApp(firebaseConfig);
export const APP_AUTH = getAuth(APP_FIREBASE);
