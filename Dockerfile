FROM node:10

WORKDIR /app

COPY . /app

RUN yarn 


CMD ["node", "index.js"]

EXPOSE 3000