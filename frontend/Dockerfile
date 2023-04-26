FROM --platform=arm64 node:18

COPY package.json /frontend/package.json
COPY package-lock.json /frontend/package-lock.json

WORKDIR /frontend
RUN npm install -g npm@latest
RUN npm install