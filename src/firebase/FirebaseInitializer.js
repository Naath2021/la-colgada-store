// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAZAQ6KSdz_kzKnGDu6tZ8WAEspvdEA3wQ",
  authDomain: "coderhouse-ecommerce-f9a2f.firebaseapp.com",
  projectId: "coderhouse-ecommerce-f9a2f",
  storageBucket: "coderhouse-ecommerce-f9a2f.appspot.com",
  messagingSenderId: "675162713165",
  appId: "1:675162713165:web:2ca565aa8b5c6c68f80004",
  measurementId: "G-R7Y203ENLN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firebaseDb = getFirestore(app)