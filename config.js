// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
const { initializeAppCheck, ReCaptchaV3Provider } = require("firebase/app-check");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAVm7oxWt3LfgGDAiknh8SgEafKqgSdF4",
  authDomain: "misserv.firebaseapp.com",
  projectId: "misserv",
  storageBucket: "misserv.appspot.com",
  messagingSenderId: "1072776762886",
  appId: "1:1072776762886:web:0a8e9e730488e8dcd05587",
  measurementId: "G-GX1JTTGH5L"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);




export const db = getFirestore(app);


