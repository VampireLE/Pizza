FROM node:26.5.0

WORKDIR /app

COPY . .

RUN npm install