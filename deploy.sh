#!/bin/bash

export DOCKER_API_VERSION=1.43

cd /home/ubuntu/ibv-technologies-website 

git pull

docker-compose down

docker system prune -af

docker-compose up -d --build