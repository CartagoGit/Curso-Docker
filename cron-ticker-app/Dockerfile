# Desarrollo
FROM --platform=$BUILDPLATFORM node:19.2-alpine3.16 as deps
WORKDIR /app
COPY package.json ./
RUN npm install

# Cada from es una nueva etapa o stage
# Build y testing
FROM node:19.2-alpine3.16 as builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run test

# RUN npm run build # En caso por ejemplo de que se tenga un build

# Dependencias de produccion
FROM --platform=$BUILDPLATFORM node:19.2-alpine3.16 as prod-deps
WORKDIR /app
COPY package.json ./
RUN npm install --omit=dev

# Corremos la app
FROM --platform=$BUILDPLATFORM node:19.2-alpine3.16 as runner
WORKDIR /app
COPY --from=prod-deps /app/node_modules ./node_modules
COPY app.js package.json ./
COPY tasks/ ./tasks

CMD ["npm","start"]

# para cambiar las arquitecturas podemos seguir el siguiente tutorial
# https://docs.docker.com/build/building/multi-platform/#getting-started

# CON ESTO creamos la imagen y la colgamos en todas las arquitecturas disponibles
# docker buildx build --platform linux/amd64,linux/amd64/v2,linux/amd64/v3,linux/arm64,linux/riscv64,linux/ppc64le,linux/s390x,linux/386,linux/mips64le,linux/mips64,linux/arm/v7,linux/arm/v6 --tag cartagodocker/curso-cron-ticker:latest --push .

