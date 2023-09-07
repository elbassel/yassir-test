FROM node:18.0-alpine
WORKDIR /api
COPY package.json /api
RUN npm install
COPY . /api
CMD node server.js
EXPOSE 3000