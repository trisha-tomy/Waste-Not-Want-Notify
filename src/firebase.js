import firebase from "firebase/compat/app";
import { initializeApp } from "firebase/app";
import{ getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAL8aSprqbu2SsEkpW4gdRKEPdx2jXZE4U",

    authDomain: "wastenotwantnotify.firebaseapp.com",
  
    projectId: "wastenotwantnotify",
  
    storageBucket: "wastenotwantnotify.appspot.com",
  
    messagingSenderId: "1732457049",
  
    appId: "1:1732457049:web:9451126444a841b78db748",
  
    measurementId: "G-99JYT6FNFV"
  
};

const OtherApp = initializeApp(firebaseConfig, "OtherApp");

const auth = getAuth(OtherApp);
const db = getFirestore(OtherApp);
const googleAuthProvider = new GoogleAuthProvider();


export {auth, googleAuthProvider, db, firebaseConfig, firebase};