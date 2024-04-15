// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdNw385seVjU_7UCnI2cfDnvTu29kdgCg",
  authDomain: "my-cycle-6ab72.firebaseapp.com",
  projectId: "my-cycle-6ab72",
  storageBucket: "my-cycle-6ab72.appspot.com",
  messagingSenderId: "1091137947446",
  appId: "1:1091137947446:web:a90a985a689aa231859597"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const FIRESTORE_DB = getFirestore(app);