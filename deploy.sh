#!/bin/bash

# Check for environment argument
if [ -z "$1" ]; then
  echo "Usage: ./deploy.sh [dev|stag|prod]"
  exit 1
fi

# Set the appropriate site and config file based on the environment
if [ "$1" == "dev" ]; then
  site="minimal-app-dev"
  CONFIG_FILE="firebase.dev.json"
elif [ "$1" == "stag" ]; then
  site="minimal-app-stag"
  CONFIG_FILE="firebase.stag.json"
elif [ "$1" == "prod" ]; then
  site="minimal-app-prod"
  CONFIG_FILE="firebase.prod.json"
else
  echo "Invalid environment. Use dev, stag, or prod."
  exit 1
fi

# Copy the environment-specific config to firebase.json
cp $CONFIG_FILE firebase.json

# Deploy to Firebase hosting site
firebase deploy --only hosting:$site
