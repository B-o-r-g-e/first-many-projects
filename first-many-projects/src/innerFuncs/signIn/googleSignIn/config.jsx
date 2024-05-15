// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBUvYJ_RZ2e65iEkM2LeWVlkIZW4v0kOik",
    authDomain: "gpt3-b775e.firebaseapp.com",
    projectId: "gpt3-b775e",
    storageBucket: "gpt3-b775e.appspot.com",
    messagingSenderId: "497573901936",
    appId: "1:497573901936:web:62ef1afaaf5699b83926b5",
    measurementId: "G-LT2FC0W5XW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);