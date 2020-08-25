# Builder step
## Specify a base image as builder step
FROM node:14-alpine as builder
## Specify the working directory
WORKDIR /app
## Copy needed files 
COPY package.json  .
## Install dependencies
RUN npm install
## Copy app files
COPY . .
## Run build
RUN npm run build

# Run step
## /app/build <---------- all the stuff
## second phase
FROM nginx
COPY --from=builder /app/build /usr/share/nginx/html
# NO Default command