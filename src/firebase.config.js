// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAB1nQrPWbXezFneyj_MFaJXhd8Ky8FeQ8",
  authDomain: "react-appli-recettes.firebaseapp.com",
  projectId: "react-appli-recettes",
  storageBucket: "react-appli-recettes.appspot.com",
  messagingSenderId: "858868142658",
  appId: "1:858868142658:web:ca9254cba6c714225793db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db }