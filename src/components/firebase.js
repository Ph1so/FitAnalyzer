// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmsV0DeviP4AuLH10NoK6XHw-BG9oPNqg",
  authDomain: "fitnessapp-e8b53.firebaseapp.com",
  projectId: "fitnessapp-e8b53",
  storageBucket: "fitnessapp-e8b53.appspot.com",
  messagingSenderId: "217165628371",
  appId: "1:217165628371:web:f7b5f33b07ec9b009fe526",
  measurementId: "G-9RB7Y94KBL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const analytics = getAnalytics(app);

export { db };