FROM node:alpine as builder

WORKDIR '/home/cryptodash'
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
RUN yarn build

FROM nginx
EXPOSE 80
COPY --from=builder /home/cryptodash/build /usr/share/nginx/html