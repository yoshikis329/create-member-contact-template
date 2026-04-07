import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyBHt3387MtvVeZxRhSVh0Ra8hXsWEekdYE",
    authDomain: "create-template-login.firebaseapp.com",
    projectId: "create-template-login",
    storageBucket: "create-template-login.firebasestorage.app",
    messagingSenderId: "546602104432",
    appId: "1:546602104432:web:5ca1d4a532e235880e26b5",
    measurementId: "G-FEM7PCZ9HN"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
