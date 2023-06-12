FROM node:19.2-alpine3.16
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