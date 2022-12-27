FROM node:alpine

WORKDIR /app

COPY main.js /app

ENTRYPOINT [ "node","/app/main.js"]