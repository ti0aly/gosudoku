// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCRqKH9m9y2E7Cp1518WZt3WLryafoebPQ",
    authDomain: "bd-sudoku.firebaseapp.com",
    projectId: "bd-sudoku",
    storageBucket: "bd-sudoku.appspot.com",
    messagingSenderId: "545448621634",
    appId: "1:545448621634:web:821376de1542931ed3dfdb",
    measurementId: "G-PB2B8PBNBJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const dbRef = firebase.database().ref();

dbRef.once('value', (snapshot) => {
    const data = snapshot.val();
    console.log(data);
  });