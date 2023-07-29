import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBHkLBkCHo6Wr7uEVWqQGE8aPk8UB5-wTw",
  authDomain: "my-project-390519.firebaseapp.com",
  projectId: "my-project-390519",
  storageBucket: "my-project-390519.appspot.com",
  messagingSenderId: "746010950613",
  appId: "1:746010950613:web:03d7eae15116d15b981b5c",
  measurementId: "G-TRVTYWVE9D"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
