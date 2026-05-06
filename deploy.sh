#!/bin/bash
cd /home/ubuntu/ibv-technologies-website
# /home/ubuntu/-Bazm-e-Ahlulbait
git pull
#docker rm -f  bazm-admin
#docker build -t bazm-admin:latest .
#docker run -itd -p 80:3000 --name bazm-admin bazm-admin:latest
sudo docker-compose up -d --build
docker system prune -f --all