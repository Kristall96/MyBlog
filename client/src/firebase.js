// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "main-blog-56a26.firebaseapp.com",
  projectId: "main-blog-56a26",
  storageBucket: "main-blog-56a26.appspot.com",
  messagingSenderId: "662147317358",
  appId: "1:662147317358:web:b64f386bbcaab51c65b07f",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
