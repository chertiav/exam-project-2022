ARG VERSION=lts-hydrogen

FROM node:$VERSION

ARG NODE_ENV="development"

RUN mkdir ./server

WORKDIR /server

RUN mkdir -p /public/images

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD [ "npm", "start"]

