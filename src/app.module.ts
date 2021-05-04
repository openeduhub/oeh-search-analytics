import { HttpModule, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import * as Joi from 'joi';
import { join } from 'path';
import { DummyResolver } from './resolvers//dummy/dummy.resolver';
import { OpenSessionResolver } from './resolvers/open-session/open-session.resolver';
import { ResultClickResolver } from './resolvers/result-click/result-click.resolver';
import { SearchRequestResolver } from './resolvers/search-request/search-request.resolver';
import { EduSharingService } from './services/edu-sharing/edu-sharing.service';
import { ElasticSearchService } from './services/elastic-search/elastic-search.service';
import { LifecycleEventResolver } from './resolvers/lifecycle-event/lifecycle-event.resolver';

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
        HttpModule,
    ],
    controllers: [],
    providers: [
        DummyResolver,
        SearchRequestResolver,
        ElasticSearchService,
        OpenSessionResolver,
        ResultClickResolver,
        EduSharingService,
        LifecycleEventResolver,
    ],
})
export class AppModule {}
