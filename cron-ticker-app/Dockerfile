# si quisieramos crearlo manualmente para otra arquitectura
# FROM --platform=arm64 node:19.2-alpine3.16
# FROM node:19.2-alpine3.16
FROM --platform=$BUILDPLATFORM node:19.2-alpine3.16
# ya tiene una carpeta interna /app /usr /lib etc


# cd app
WORKDIR /app

# Lo que se quiere copiar, y por ultimo el destino, en este caso la carpeta /app, pero como ya se hizo el workdir, no es necesario
# COPY app.js package.json ./
COPY package.json ./

# instalamos las dependencias
RUN npm install

# COPY app.js ./
COPY . .

# Realizar testing
RUN npm run test

# Eliminar archivos y directorios no necesarios en produccion
RUN rm -rf tests node_modules 

#unicamente los de produccion
RUN npm install --prod

# Comando que se ejecuta cuando se corre el contenedor
CMD ["npm","start"]
# CMD ["node","app.js"]

# Para crear la imagen
# docker build --tag cron-ticker .

# Para correr el contenedor
# docker container run cron-ticker


#Cambiar el tag de la imagen
# docker image tag cron-ticker cartagodocker/curso-cron-ticker:0.1.0

# para subir la imagen
# docker push cartagodocker/curso-cron-ticker:0.1.0

# docker login

# para cambiar las arquitecturas podemos seguir el siguiente tutorial
# https://docs.docker.com/build/building/multi-platform/#getting-started

# CON ESTO creamos la imagen y la colgamos en todas las arquitecturas disponibles
# docker buildx build --platform linux/amd64,linux/amd64/v2,linux/amd64/v3,linux/arm64,linux/riscv64,linux/ppc64le,linux/s390x,linux/386,linux/mips64le,linux/mips64,linux/arm/v7,linux/arm/v6 --tag cartagodocker/curso-cron-ticker:latest --push .