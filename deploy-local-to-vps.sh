#!/bin/bash

VPS_USER=root
VPS_IP=195.35.23.152
VPS_PATH=/snba-main

echo "📤 Pushing to Git..."
git add .
git commit -m "Deploy update"
git push origin main

echo "🚀 Deploying to VPS..."
ssh $VPS_USER@$VPS_IP "cd $VPS_PATH && git pull origin main && ./deploy.sh"