import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DummyResolver } from './dummy/dummy.resolver';
import { SearchRequestResolver } from './search-request/search-request.resolver';
import { ElasticSearchService } from './elastic-search/elastic-search.service';
import * as Joi from 'joi';

@Module({
    imports: [
        GraphQLModule.forRoot({
            autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
        }),
        ConfigModule.forRoot({
            validationSchema: Joi.object({
                ELASTICSEARCH_URL: Joi.string().uri().required(),
                ELASTICSEARCH_INDEX: Joi.string().required(),
            }),
        }),
    ],
    controllers: [AppController],
    providers: [AppService, DummyResolver, SearchRequestResolver, ElasticSearchService],
})
export class AppModule {}
