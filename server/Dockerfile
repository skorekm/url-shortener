FROM node:12.13-alpine
RUN mkdir /code
WORKDIR /code/
#copy package-lock.json and package.json for cached Docker layers
ADD package*.json /code/
RUN npm install
ADD . /code/