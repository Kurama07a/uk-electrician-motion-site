# Coolify dockerfile pack may wrap this image and COPY /app/dist into nginx.
# Keep /app/dist in the final stage so that wrap succeeds; also include a
# self-contained nginx stage for local/docker-compose use.
FROM node:22-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:22-alpine
WORKDIR /app
COPY --from=build /app/dist /app/dist
# Minimal file so the image isn't empty if inspected
RUN ls -la /app/dist | head
