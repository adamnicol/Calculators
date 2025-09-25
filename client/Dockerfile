FROM node:24-alpine as base
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . . 

# Development
FROM base as dev
EXPOSE 5173
CMD ["npm", "run", "dev"]

# Build
FROM base as build
RUN npm run build

# Production
FROM nginx:alpine as prod
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]