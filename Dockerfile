FROM node:latest as react-webpack-dong
WORKDIR /docker/app
COPY package.json package-lock.json ./
RUN npm install
COPY . ./
RUN npm run build


FROM nginx:latest
COPY --from=react-webpack-dong /docker/app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]