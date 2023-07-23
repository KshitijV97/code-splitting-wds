FROM node:alpine as node-env
WORKDIR /myapp
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.23-alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf 
COPY --from=0 /myapp/dist .
ENTRYPOINT ["nginx","-g","daemon off;"]