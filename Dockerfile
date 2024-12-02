FROM node:22-alpine

ARG VITE_API_URL
ARG VITE_NETWORK_DOMAIN
ARG VITE_GLOBAL_API_URL

WORKDIR /app

COPY package.json package-lock.json ./

RUN ["npm", "ci"]

COPY . .

RUN ["npm", "run", "build"]

EXPOSE 3000
CMD ["npm", "run", "preview"]