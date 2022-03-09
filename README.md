# OEH Search Analytics

Log usage behavior of OEH search .

## Installation

```bash
$ npm install
```

## Running the app

```bash
# run elasticsearch (dependency)
docker run --name oeh-search-analytics-index --rm -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" docker.elastic.co/elasticsearch/elasticsearch:7.12.0
```

```bash
# development
$ npm run start

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Docker

```bash
# build app
$ npm run build
# build and run app image with dependencies
$ docker-compose up --build
```

## Configuration

The app can be configured with

-   environment variables
-   the file `.env` in development setup (copy `.env.sample` to `.env`)

Available options are:

| Variable            | Description                                                    | Default value                     |
| ------------------- | -------------------------------------------------------------- | --------------------------------- |
| PORT                | HTTP Port on which to expose this service                      | 3000                              |
| ELASTICSEARCH_URL   | Root URL where this service can reach the ElasticSearch server | http://localhost:9200             |
| ELASTICSEARCH_INDEX | ElasticSearch index to query                                   | oeh-search-analytics              |
| EDUSHARING_URL      | Root URL where this service can reach the Edu-Sharing server   | http://localhost:4200/edu-sharing |
