// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-app.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyABYgFWBrewhLAJ3if2DkbQO2F1PvHowOw",
    authDomain: "minimal-app-10a70.firebaseapp.com",
    projectId: "minimal-app-10a70",
    storageBucket: "minimal-app-10a70.appspot.com",
    messagingSenderId: "880348373063",
    appId: "1:880348373063:web:0c2495d1b206b223b71162"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Environment-specific API URL
const apiUrls = {
    dev: 'https://minimal-app-dev-50348277979.us-central1.run.app/test',
    stag: 'https://minimal-app-stag-50348277979.us-central1.run.app/test',
    prod: 'https://minimal-app-prod-50348277979.us-central1.run.app/test'
};

// Determine the environment
const environment = 'dev'; // Change this to 'staging' or 'production' as needed

// Fetch the message from the backend
fetch(apiUrls[environment])
    .then(response => response.json())
    .then(data => {
        document.getElementById('message').textContent = data.message;
    })
    .catch(error => {
        document.getElementById('message').textContent = 'Error fetching message';
        console.error('Error:', error);
    });
