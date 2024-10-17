sudo docker build -t minimal-app .

sudo docker run --env-file .env -p 5000:5000 minimal-app
