FROM node:16-alpine

WORKDIR /app

COPY . ./

# Clear npm cache before installing dependencies
RUN npm cache clean --force

RUN npm install

CMD npm start
