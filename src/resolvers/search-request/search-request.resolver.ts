import { Logger } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { ElasticSearchService } from '../../services/elastic-search/elastic-search.service';
import { SearchRequestArgs } from './models/search-request-args.model';

@Resolver()
export class SearchRequestResolver {
    private readonly logger = new Logger(SearchRequestResolver.name);

    constructor(private readonly elasticSearchService: ElasticSearchService) {}

    @Mutation(() => Boolean, {
        description: 'Report a search request being done by a user.',
        nullable: true,
    })
    async searchRequest(@Args() args: SearchRequestArgs): Promise<void> {
        const body = this.prepareBody(args);
        this.logger.log(body);
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
