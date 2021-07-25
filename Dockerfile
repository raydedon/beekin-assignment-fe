FROM node:latest

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json ./

COPY package-lock.json ./

RUN npm i

COPY . ./

RUN npm run build

EXPOSE 3000

CMD ["/bin/sh", "script.sh"]
