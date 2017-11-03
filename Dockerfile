FROM node:8-alpine

USER root

WORKDIR /home/app

ADD . /home/app

RUN node -v && npm -v && npm install

CMD npm run start
