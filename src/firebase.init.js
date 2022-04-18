// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvRXeUPyjKiQvMeVqQw7_ppiYR5aNuSH8",
  authDomain: "dreamy-travels-e732d.firebaseapp.com",
  projectId: "dreamy-travels-e732d",
  storageBucket: "dreamy-travels-e732d.appspot.com",
  messagingSenderId: "975101748154",
  appId: "1:975101748154:web:89c9f87b5814d23f8eb383",
  measurementId: "G-CVYZ2Y7G4M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
