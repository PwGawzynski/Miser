// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDLi8kY5pD8my-2e_ilM3vdssbK2heZ5tI',
  authDomain: 'miser-95d10.firebaseapp.com',
  projectId: 'miser-95d10',
  storageBucket: 'miser-95d10.appspot.com',
  messagingSenderId: '597990325921',
  appId: '1:597990325921:web:34253fdfa305344e60fae0',
  measurementId: 'G-GM601ZNYKK',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
