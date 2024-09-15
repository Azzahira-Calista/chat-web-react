// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB6pUI2MYB_PYY1G25ceSU9QfRsu5WIlkA",
    authDomain: "chat-6a59f.firebaseapp.com",
    projectId: "chat-6a59f",
    storageBucket: "chat-6a59f.appspot.com",
    messagingSenderId: "97843336786",
    appId: "1:97843336786:web:084904b0e86b6b892f718b"
  };  

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();