FROM node:22-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

# Coolify wraps this image and copies /app/dist into nginx (publish_directory=/dist).
FROM alpine:3.20
WORKDIR /app
COPY --from=build /app/dist /app/dist
