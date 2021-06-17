FROM node:16-alpine3.11

RUN mkdir -p /usr/app

WORKDIR /usr/app

COPY package.json .

COPY yarn.lock .

RUN yarn

COPY . .

