#!/bin/bash

# ====

HOST_USER=$"labcodes@159.203.127.36"
HOST_PATH=$"/home/labcodes/knowledge-app/dist"

BUILD_PATH=$"./dist/*"

# ====

echo "Initializing the Setup"
sudo apt-get install rsync

echo "Connecting by SSH"
ssh -o "StrictHostKeyChecking no" $HOST_USER "mkdir -p $HOST_PATH"

echo "Creating branch folder"

echo "Deploy to Ditigal Ocean"
rsync -e "ssh -o StrictHostKeyChecking=no" -ru $BUILD_PATH $HOST_USER:$HOST_PATH

echo "You can now try your feature here: https://app.knowledge.labcod.es"
