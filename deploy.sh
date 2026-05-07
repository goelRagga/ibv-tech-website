#!/bin/bash
cd /home/ubuntu/ibv-technologies-website
# /home/ubuntu/ibv-technologies-website
git pull
#docker rm -f  ibv-technologies-website
#docker build -t ibv-technologies-website:latest .
#docker run -itd -p 80:3000 --name ibv-technologies-website ibv-technologies-website:latest
sudo docker-compose up -d --build
docker system prune -f --all