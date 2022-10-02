FROM node:16.17 as install

ENV NODE_ENV=development

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

FROM install as build

COPY tsconfig.json .eslintrc.js ./
COPY src ./src

RUN yarn rebuild

FROM node:16.17 as production

WORKDIR /app

ENV NODE_ENV=production

COPY package.json yarn.lock ./

RUN yarn install

COPY --from=build /app/dist ./dist
