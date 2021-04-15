import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SearchResolver } from './search/search.resolver';
import { DummyResolver } from './dummy/dummy.resolver';

@Module({
    imports: [
        GraphQLModule.forRoot({
            autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
        }),
    ],
    controllers: [AppController],
    providers: [AppService, SearchResolver, DummyResolver],
})
export class AppModule {}
