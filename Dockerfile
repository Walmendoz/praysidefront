FROM node:16.15.1 AS build
WORKDIR /app
COPY package.json package-lock.json /app/
RUN npm i

COPY . .
RUN npm run build 

FROM nginx:alpine
ADD ./config/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /var/www/app/
EXPOSE 80

CMD [ "nginx", "-g", "daemon off;" ]
