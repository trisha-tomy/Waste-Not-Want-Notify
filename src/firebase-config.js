// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "@firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAL8aSprqbu2SsEkpW4gdRKEPdx2jXZE4U",
  authDomain: "wastenotwantnotify.firebaseapp.com",
  projectId: "wastenotwantnotify",
  storageBucket: "wastenotwantnotify.appspot.com",
  messagingSenderId: "1732457049",
  appId: "1:1732457049:web:9451126444a841b78db748",
  measurementId: "G-99JYT6FNFV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
