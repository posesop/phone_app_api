FROM node:carbon-alpine

# Create app directory
WORKDIR /usr/src/app

# Bundle app source
COPY ./ .

RUN apk --no-cache add --virtual native-deps \
  g++ gcc libgcc libstdc++ linux-headers make python git openssh && \
  npm install --quiet node-gyp -g &&\
  npm install --quiet && \
  apk del native-deps

# EXPOSE 8080
CMD [ "npm", "start" ]