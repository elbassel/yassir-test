FROM node:18.0-alpine
WORKDIR /scheduler
COPY package.json /scheduler
RUN npm install
COPY . /scheduler
CMD node index.js