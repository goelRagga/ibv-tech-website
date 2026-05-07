#!/bin/bash

cd /home/ubuntu/ibv-technologies-website || exit

git pull

export DOCKER_API_VERSION=1.43

docker-compose down

docker system prune -af

docker-compose up -d --build