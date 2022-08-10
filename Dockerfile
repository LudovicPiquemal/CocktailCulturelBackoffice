FROM node:16 AS builder
ENV NODE_ENV production
WORKDIR /app
COPY ./package.json ./
COPY ./package-lock.json ./
RUN npm install
COPY . .
RUN NODE_ENV=production npm run build
CMD ["NODE_ENV=production", "npm", "start"]
