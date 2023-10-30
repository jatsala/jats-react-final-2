// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC9kVwW2GKs7dP4Z7H2VJsAl8KFZs9p2fA",
    authDomain: "jatsa-tasklist-fb.firebaseapp.com",
    projectId: "jatsa-tasklist-fb",
    storageBucket: "jatsa-tasklist-fb.appspot.com",
    messagingSenderId: "520555432327",
    appId: "1:520555432327:web:918f90c74b1ec72073eb22"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Inicializar Firestore
export const db = getFirestore();