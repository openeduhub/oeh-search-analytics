import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { ElasticSearchService } from '../../elastic-search/elastic-search.service';
import { SearchRequestArgs } from './models/search-request-args.model';

@Resolver()
export class SearchRequestResolver {
    constructor(private readonly elasticSearchService: ElasticSearchService) {}

    @Mutation(() => Boolean, {
        description: 'Report a search request being done by a user.',
        nullable: true,
    })
    async searchRequest(@Args() args: SearchRequestArgs): Promise<void> {
        const body = this.prepareBody(args);
        console.log('searchRequest', body);
        return this.elasticSearchService.index(body);
    }

    prepareBody(args: SearchRequestArgs): Record<string, any> {
        return {
            action: 'search request',
            ...args,
            filters: JSON.parse(args.filters),
        };
    }
}
