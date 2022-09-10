// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtIoUkwnVL575RWn86B17lR84euK-QZKE",
  authDomain: "chatapp-97844.firebaseapp.com",
  projectId: "chatapp-97844",
  storageBucket: "chatapp-97844.appspot.com",
  messagingSenderId: "554425959771",
  appId: "1:554425959771:web:2c343f6fdb1c4d2ade867e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)