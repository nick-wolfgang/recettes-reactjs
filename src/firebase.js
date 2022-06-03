// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAq3YEFMGTE47Se2EIdiZT-BecEYXGqKfM",
//   authDomain: "insta-clone-5369f.firebaseapp.com",
//   projectId: "insta-clone-5369f",
//   storageBucket: "insta-clone-5369f.appspot.com",
//   messagingSenderId: "597822649441",
//   appId: "1:597822649441:web:0834c07c3bf683aa58a620",
//   measurementId: "G-X4YMSYX4ZJ"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//import firebase from "firebase";
//StACKOVERFLOW Config
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAq3YEFMGTE47Se2EIdiZT-BecEYXGqKfM",
    authDomain: "insta-clone-5369f.firebaseapp.com",
    projectId: "insta-clone-5369f",
    storageBucket: "insta-clone-5369f.appspot.com",
    messagingSenderId: "597822649441",
    appId: "1:597822649441:web:0834c07c3bf683aa58a620",
    measurementId: "G-X4YMSYX4ZJ"
};
// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);
// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { auth, db, storage };

//SONY'S Config
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';

// const firebaseApp = firebase.initializeApp({
//     apiKey: "AIzaSyAq3YEFMGTE47Se2EIdiZT-BecEYXGqKfM",
//     authDomain: "insta-clone-5369f.firebaseapp.com",
//     projectId: "insta-clone-5369f",
//     storageBucket: "insta-clone-5369f.appspot.com",
//     messagingSenderId: "597822649441",
//     appId: "1:597822649441:web:0834c07c3bf683aa58a620",
//     measurementId: "G-X4YMSYX4ZJ"
// });

// const db = firebaseApp.firestore();
// const auth = firebase.auth();
// const storage = firebase.storage();

// export { db, auth, storage };