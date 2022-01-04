FROM node:16.13.1-alpine3.15

WORKDIR /app

RUN apk add make && npm install -g esbuild

CMD ["make", "release"]