# syntax=docker/dockerfile:1

FROM node:20.11.0-alpine3.19 AS Node-TS-Starter

ENV TZ=Africa/Algiers
ENV LANG=en_US.UTF-8
LABEL app="Node TS Starter with Pnpm"
LABEL version="1.0.0"

WORKDIR /app

RUN addgroup -S nodeuser && adduser -S -g nodeuser nodeuser && npm i -g pnpm

#RUN npm i -g pnpm
##COPY --chown=nodeuser:nodeuser package.json pnpm-lock.yaml ./

COPY package.json ./

RUN  pnpm install 

## --frozen-lockfile
##RUN addgroup -S nodeuser && adduser -S -g nodeuser nodeuser
##COPY --chown=nodeuser:nodeuser . .

COPY --chown=nodeuser:nodeuser . .
USER nodeuser
##USER nodeuser:nodeuser

#EXPOSE ${PORT}
#RUN alias rimraf='rm -rf'
ENTRYPOINT [ "pnpm" ]
CMD ["start"]