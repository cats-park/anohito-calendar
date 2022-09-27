#nodeイメージをpullする
FROM node:14.17.5-alpine

#working directory
WORKDIR /app

RUN apk update && \
    npm install && \
    npm install -g npm

RUN apk add --no-cache python3 py3-pip && \
    apk add --update python3 make g++ && \
    rm -rf /var/cache/apk/*