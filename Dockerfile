FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install -g expo-cli && npm install

COPY . .

EXPOSE 19000

CMD ["expo", "start", "--tunnel"]
