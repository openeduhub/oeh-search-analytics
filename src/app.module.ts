import { HttpModule, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import * as Joi from 'joi';
import { join } from 'path';
import { DummyResolver } from './resolvers//dummy/dummy.resolver';
import { LifecycleEventResolver } from './resolvers/lifecycle-event/lifecycle-event.resolver';
import { OpenSessionResolver } from './resolvers/open-session/open-session.resolver';
import { ResultClickResolver } from './resolvers/result-click/result-click.resolver';
import { SearchRequestResolver } from './resolvers/search-request/search-request.resolver';
import { EduSharingService } from './services/edu-sharing/edu-sharing.service';
import { ElasticSearchService } from './services/elastic-search/elastic-search.service';

const devMode = process.env.NODE_ENV !== 'production';

@Module({
    imports: [
        GraphQLModule.forRoot({
            autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
            // The browsers beacon API sends requests with `credentials` set to `include`. This is
            // not supported if Access-Control-Allow-Origin is `*` (NEST's default). We don't need
            // CORS in production, where backend and frontend are served from a matching domain.
            cors: devMode
                ? {
                      origin: 'http://localhost:4200',
                      credentials: true,
                      // Firefox seems to be more likely to fail to complete a request in some
                      // situations when it has to send a preflight beforehand. Setting `maxAge` to
                      // a high value, we allow it to skip the preflight after the first request.
                      maxAge: 86400,
                  }
                : undefined,
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
