FROM node:16

# build arg
ARG SERVICE_NAME=http-service
ARG APP_ROOT=/app
ARG NODE_ENV=production
ARG PORT=8080
ARG VECTOR_URL=https://repositories.timber.io/public/vector/cfg/setup/bash.deb.sh

# env variables
ENV APP_ROOT=$APP_ROOT
ENV APP_NAME=$SERVICE_NAME
ENV PORT=$PORT
ENV NODE_ENV=$NODE_ENV

# create app directory
WORKDIR ${APP_ROOT}
ADD . ${APP_ROOT}

# Install & run vector
RUN curl -1sLf ${VECTOR_URL} | bash -E 
RUN apt-get install bc vector

# global install & update
RUN yarn

# expose PORT on container
EXPOSE ${PORT}

# Start the app
CMD yarn start | vector --config ${APP_ROOT}/vector.toml