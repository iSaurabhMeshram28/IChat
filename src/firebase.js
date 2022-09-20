
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyALMlWpCspxKRz6XfDkBbLu7MAUikLybsE",
  authDomain: "ichat-48d07.firebaseapp.com",
  projectId: "ichat-48d07",
  storageBucket: "ichat-48d07.appspot.com",
  messagingSenderId: "824545225945",
  appId: "1:824545225945:web:3a5bb8a914eb67677622c8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();