// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCtevzxRN2V6VwJ_AzIRbXp52zJzkQc_Y4",
  authDomain: "studenthub-872a1.firebaseapp.com",
  projectId: "studenthub-872a1",
  storageBucket: "studenthub-872a1.appspot.com",
  messagingSenderId: "448611113170",
  appId: "1:448611113170:web:08b7beca509e04754fb50b",
  measurementId: "G-0EJ97T9341"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };