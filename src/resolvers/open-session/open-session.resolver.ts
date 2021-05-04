import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { ClientInformationArgs } from '../../models/client-information-args.model';
import { ElasticSearchService } from '../../services/elastic-search/elastic-search.service';

@Resolver()
export class OpenSessionResolver {
    constructor(private readonly elasticSearchService: ElasticSearchService) {}

    @Mutation(() => String, {
        description: 'Return a fresh session ID.',
    })
    async openSession(@Args() args: ClientInformationArgs): Promise<string> {
        const sessionId = this.generateSessionId();
        const body = { action: 'open_session', sessionId, ...args };
        await this.elasticSearchService.index(body);
        return sessionId;
    }

    private generateSessionId(): string {
        return Math.random().toString(36).replace('0.', '') + Date.now().toString(36);
    }
}
