FROM node:14-alpine
ARG REQUIREMENTS
ENV NODE_ENV=REQUIREMENTS
# ENV PORT 4000

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Installing dependencies
COPY package*.json /usr/src/app/
RUN yarn install --quiet

# RUN yarn add sharp
# ENV NODE_PATH=/node_modules
# ENV PATH=$PATH:/node_modules/.bin

# Copying source files
COPY . /usr/src/app



# Building app
# RUN yarn build
# EXPOSE 4000
EXPOSE 1337

# Running the app
# CMD ["yarn","start-docker"]