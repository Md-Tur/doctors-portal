// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC6tRn5yWtWWOlzK7Rgk_V30viqkONWhzo",
    authDomain: "doctors-portal-ae7c9.firebaseapp.com",
    projectId: "doctors-portal-ae7c9",
    storageBucket: "doctors-portal-ae7c9.appspot.com",
    messagingSenderId: "51106843546",
    appId: "1:51106843546:web:d96ea63028ea2ba1978823"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;