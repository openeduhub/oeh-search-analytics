import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import * as Joi from 'joi';
import { join } from 'path';
import { ElasticSearchService } from './elastic-search/elastic-search.service';
import { DummyResolver } from './resolvers//dummy/dummy.resolver';
import { OpenSessionResolver } from './resolvers/open-session/open-session.resolver';
import { ResultClickResolver } from './resolvers/result-click/result-click.resolver';
import { SearchRequestResolver } from './resolvers/search-request/search-request.resolver';

@Module({
    imports: [
        GraphQLModule.forRoot({
            autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
        }),
        ConfigModule.forRoot({
            validationSchema: Joi.object({
                PORT: Joi.number(),
                ELASTICSEARCH_URL: Joi.string().uri(),
                ELASTICSEARCH_INDEX: Joi.string(),
            }),
        }),
    ],
    controllers: [],
    providers: [
        DummyResolver,
        SearchRequestResolver,
        ElasticSearchService,
        OpenSessionResolver,
        ResultClickResolver,
        // LogRequestsPlugin,
    ],
})
export class AppModule {}
