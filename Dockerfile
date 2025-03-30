FROM node:16-alpine
RUN npm install
WORKDIR /app
COPY . ./
CMD npm start
