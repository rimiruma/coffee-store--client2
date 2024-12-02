// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOdx2QIH10iMqcRfRDXl93UNc8AssDm6M",
  authDomain: "coffee-store-2433d.firebaseapp.com",
  projectId: "coffee-store-2433d",
  storageBucket: "coffee-store-2433d.firebasestorage.app",
  messagingSenderId: "522288884861",
  appId: "1:522288884861:web:af4e52053912a7981ad514"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);