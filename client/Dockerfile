ARG VERSION=lts-hydrogen

FROM node:$VERSION

ARG NODE_ENV="development"

RUN mkdir ./client

WORKDIR /client

COPY package*.json ./

RUN npm install

RUN mkdir /client/node_modules/.cache && chmod -R 777 /client/node_modules/.cache

COPY . .

EXPOSE 3000

CMD [ "npm", "start"]
