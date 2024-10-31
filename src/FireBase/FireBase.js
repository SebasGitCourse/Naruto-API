// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoqx636ap3Rr-I5F6e9YXf-dxk6NJzs7w",
  authDomain: "entrega-4-bc6a8.firebaseapp.com",
  projectId: "entrega-4-bc6a8",
  storageBucket: "entrega-4-bc6a8.appspot.com",
  messagingSenderId: "958484340284",
  appId: "1:958484340284:web:736753aa7d0b1bc1e06d39",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export default { app };
