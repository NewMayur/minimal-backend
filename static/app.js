// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-app.js";
import { getRemoteConfig, fetchAndActivate } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-remote-config.js";

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
const remoteConfig = getRemoteConfig(app);

// Set minimum fetch interval for Remote Config
remoteConfig.settings.minimumFetchIntervalMillis = 3600000; // 1 hour

// Mock Remote Config for local testing
const mockRemoteConfig = {
    apiUrl: 'http://localhost:5000/test' // Use your local API URL for testing
};

// Fetch and activate Remote Config values
async function fetchRemoteConfig() {
    try {
        await fetchAndActivate(remoteConfig);
        const apiUrl = remoteConfig.getValue('apiUrl').asString() || mockRemoteConfig.apiUrl;
        console.log('API URL:', apiUrl);
        
        // Fetch the message from the backend using the fetched API URL
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                document.getElementById('message').textContent = data.message;
            })
            .catch(error => {
                document.getElementById('message').textContent = 'Error fetching message';
                console.error('Error:', error);
            });
    } catch (error) {
        console.error('Remote Config Error:', error);
        
        // Use mock API URL if Remote Config fetch fails
        const apiUrl = mockRemoteConfig.apiUrl;
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                document.getElementById('message').textContent = data.message;
            })
            .catch(error => {
                document.getElementById('message').textContent = 'Error fetching message';
                console.error('Error:', error);
            });
    }
}

// Call fetchRemoteConfig() when your app starts
fetchRemoteConfig();
