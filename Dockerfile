
# base node image
FROM node:16-bullseye-slim as base

# Install openssl for Prisma
RUN apt-get update && apt-get install -y openssl

# Install all node_modules, including dev dependencies
FROM base as deps

RUN mkdir /myapp
WORKDIR /myapp

ADD package.json yarn.lock ./
RUN npm install --production=false

# Setup production node_modules
FROM base as production-deps

ENV NODE_ENV production

RUN mkdir /myapp
WORKDIR /myapp

COPY --from=deps /myapp/node_modules /myapp/node_modules
ADD package.json yarn.lock ./
# Build the app
FROM base as build

RUN mkdir /myapp
WORKDIR /myapp

COPY --from=deps /myapp/node_modules /myapp/node_modules

ADD prisma .
COPY .env ./
RUN npx prisma generate
RUN npx prisma migrate dev
ADD . .
RUN yarn build

# Finally, build the production image with minimal footprint
FROM base

ENV NODE_ENV production

RUN mkdir /myapp
WORKDIR /myapp

COPY --from=production-deps /myapp/node_modules /myapp/node_modules
COPY --from=build /myapp/node_modules/.prisma /myapp/node_modules/.prisma
COPY --from=build /myapp/build /myapp/build
COPY --from=build /myapp/public /myapp/public
ADD . .
RUN npx prisma migrate dev
VOLUME ./:/myapp/prisma/data.db

CMD ["yarn", "start"]
