FROM node:16 AS builder
WORKDIR /app
COPY ./package.json ./
COPY ./package-lock.json ./
RUN npm install
COPY . .
ENV NODE_ENV production
RUN npm run build
CMD ["npm", "start"]
