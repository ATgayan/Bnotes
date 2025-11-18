// lib/firebase.js
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBtY44Ba118NnPsoWAe00PloTZat7IBXXs",
  authDomain: "fir-34b4b.firebaseapp.com",
  projectId: "fir-34b4b",
  storageBucket: "fir-34b4b.firebasestorage.app",
  messagingSenderId: "1079551443673",
  appId: "1:1079551443673:web:cca85d6392facb0a4c74c8",
  measurementId: "G-WS5PV111YF"
};

// Prevent re-initialization during hot reload
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
