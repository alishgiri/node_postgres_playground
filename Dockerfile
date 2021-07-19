FROM node:alpine

RUN mkdir -p /usr/app

WORKDIR /usr/app

COPY package.json .

COPY yarn.lock .

RUN yarn

COPY . .

