import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { ElasticSearchService } from '../../services/elastic-search/elastic-search.service';
import { LifecycleEventArgs } from './models/lifecycle-event-args.model';

@Resolver()
export class LifecycleEventResolver {
    constructor(private readonly elasticSearchService: ElasticSearchService) {}

    @Mutation(() => Boolean, {
        description: 'Report a lifecycle state change of the web page.',
        nullable: true,
    })
    async lifecycleEvent(@Args() args: LifecycleEventArgs): Promise<void> {
        const body = this.prepareBody(args);
        return this.elasticSearchService.index(body);
    }

    prepareBody(args: LifecycleEventArgs): Record<string, any> {
        return {
            action: 'lifecycle_event',
            ...args,
        };
    }
}
