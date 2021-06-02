FROM node:14.12-alpine

WORKDIR /app

ENV ENV_PRODUCCION=localhost:3000/produccion
ENV NODE_ENV=production
ENV ENV_LOCAL=localhost:3000

COPY package.json /app/
RUN npm install

# build
COPY . /app/
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]

# mirar como eliminar imagenes y matar procesos en docker