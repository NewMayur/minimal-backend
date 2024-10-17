// Environment-specific API URL
const apiUrls = {
    development: 'https://minimal-app-dev-50348277979.us-central1.run.app/test',
    staging: 'https://minimal-app-stag-50348277979.us-central1.run.app/test',
    production: 'https://minimal-app-prod-50348277979.us-central1.run.app/test',
    localhost: 'http://127.0.0.1:5000//test'
};

// Determine the environment
const environment = 'development'; // Change this to 'staging' or 'production' as needed

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
