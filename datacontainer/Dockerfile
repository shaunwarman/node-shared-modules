FROM node:6

WORKDIR /app/data

COPY ./package.json .
COPY ./server.js .

RUN npm install

CMD ["ls"]

MAINTAINER shaun
