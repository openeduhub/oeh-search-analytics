FROM node:15-alpine

ENV NODE_ENV production
ENV PORT 3000

EXPOSE 3000

WORKDIR /home/node/app

COPY package*.json ./
RUN npm ci --only=production
COPY dist ./dist

CMD [ "npm", "run", "start:prod" ]
