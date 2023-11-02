import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyAkJpyWdT3_RqeCOUaKR750CBAfk-Ct-To",
    authDomain: "gf-impports.firebaseapp.com",
    projectId: "gf-impports",
    storageBucket: "gf-impports.appspot.com",
    messagingSenderId: "215679505733",
    appId: "1:215679505733:web:394068cc2fd53e24519a2c",
    measurementId: "G-1YLD4X7V01"
  };


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)
const analytics = getAnalytics(app);

export { auth, db, analytics};