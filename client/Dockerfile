FROM node:24-alpine AS base
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . . 

# Development
FROM base AS dev
EXPOSE 5173
CMD ["npm", "run", "dev"]

# Build
FROM base AS build
RUN npm run build

# Production
FROM nginx:alpine AS prod
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]