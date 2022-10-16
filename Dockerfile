FROM node:14-alpine

RUN npm install -g @angular/cli

RUN apk add --no-cache git # we need git to install husky

RUN apk add chromium # we need a browser to run the tests

USER node

WORKDIR /app

EXPOSE 4200 49153

CMD tail -f /dev/null
