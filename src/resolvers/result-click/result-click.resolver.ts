import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { EduSharingService } from '../../services/edu-sharing/edu-sharing.service';
import { ElasticSearchService } from '../../services/elastic-search/elastic-search.service';
import { ResultClickArgs } from './models/result-click-args.model';

@Resolver()
export class ResultClickResolver {
    constructor(
        private readonly elasticSearchService: ElasticSearchService,
        private readonly eduSharingService: EduSharingService,
    ) {}

    @Mutation(() => Boolean, {
        description: 'Report result clicked by the user.',
        nullable: true,
    })
    async resultClick(@Args() args: ResultClickArgs): Promise<void> {
        const body = this.prepareBody(args);
        await Promise.all([
            this.elasticSearchService.index(body),
            this.eduSharingService.reportView(body.clickedResult),
        ]);
    }

    prepareBody(args: ResultClickArgs): Record<string, any> {
        return {
            action: 'result_click',
            ...args,
            filters: JSON.parse(args.filters),
            clickedResult: JSON.parse(args.clickedResult),
        };
    }
}
