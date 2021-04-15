import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { ElasticSearchService } from '../elastic-search/elastic-search.service';
import { SearchRequestArgs } from './models/search-request-args.model';

@Resolver()
export class SearchRequestResolver {
    constructor(private readonly elasticSearchService: ElasticSearchService) {}

    @Mutation(() => Boolean, {
        description: 'Report a search request being done by a user.',
        nullable: true,
    })
    async searchRequest(@Args() args: SearchRequestArgs): Promise<void> {
        console.log('searchRequest', args);
        return this.elasticSearchService.index(args);
    }
}
