FROM node:16

# build arg
ARG APP_ROOT=/app
ARG VECTOR_URL=https://repositories.timber.io/public/vector/cfg/setup/bash.deb.sh
ARG PORT=9000

# env variables
ENV APP_ROOT=$APP_ROOT
ENV PORT=$PORT

# create app directory
WORKDIR ${APP_ROOT}
ADD . ${APP_ROOT}

# Install & run vector
RUN curl -1sLf ${VECTOR_URL} | bash -E 
RUN apt-get install bc vector

# Export port
EXPOSE ${PORT}

# Start the app
CMD vector --config ${APP_ROOT}/vector.toml