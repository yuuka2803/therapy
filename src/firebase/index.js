// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"; 
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtvE_fWLVDnonocYlNzDPPoAM3WEWcEs8",
  authDomain: "devcamp-47b64.firebaseapp.com",
  projectId: "devcamp-47b64",
  storageBucket: "devcamp-47b64.appspot.com",
  messagingSenderId: "1073656096932",
  appId: "1:1073656096932:web:51aaa72742774799dfde31",
  measurementId: "G-M5L2E6291Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { auth, app, db }