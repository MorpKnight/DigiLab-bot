FROM node:latest
RUN mkdir -p /usr/src/discord-bot-1
WORKDIR /usr/src/discord-bot-1
COPY package.json /usr/src/discord-bot-1
RUN npm install
COPY . /usr/src/discord-bot-1
CMD ["npm", "start"]