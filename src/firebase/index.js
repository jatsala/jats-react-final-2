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

const developmentFirebaseConfig = {
    apiKey: "AIzaSyCeMKav_d5ceqm_NgpwqdcqoDHhHgoP_Cs",
    authDomain: "dev-jatsa-tasklist-fb.firebaseapp.com",
    projectId: "dev-jatsa-tasklist-fb",
    storageBucket: "dev-jatsa-tasklist-fb.appspot.com",
    messagingSenderId: "831319155726",
    appId: "1:831319155726:web:bf2a848eb0faed10bac85f"
};

// Initialize Firebase
let app;

if (process.env.NODE_ENV === 'production') {
    app = initializeApp(firebaseConfig);
} else {
    app = initializeApp(developmentFirebaseConfig);
}
// Inicializar Firestore
const db = getFirestore();

export { app, db }
