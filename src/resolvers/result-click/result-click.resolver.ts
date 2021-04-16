import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { ElasticSearchService } from 'src/elastic-search/elastic-search.service';
import { ResultClickArgs } from './models/result-click-args.model';

@Resolver()
export class ResultClickResolver {
    constructor(private readonly elasticSearchService: ElasticSearchService) {}

    @Mutation(() => Boolean, {
        description: 'Report result clicked by the user.',
        nullable: true,
    })
    async resultClick(@Args() args: ResultClickArgs): Promise<void> {
        const body = this.prepareBody(args);
        console.log('resultClick', body);
        return this.elasticSearchService.index(body);
    }

    prepareBody(args: ResultClickArgs): Record<string, any> {
        return {
            action: 'result click',
            ...args,
            filters: JSON.parse(args.filters),
        };
    }
}
