import { Mutation, Resolver } from '@nestjs/graphql';
import { ElasticSearchService } from 'src/elastic-search/elastic-search.service';

@Resolver()
export class OpenSessionResolver {
    constructor(private readonly elasticSearchService: ElasticSearchService) {}

    @Mutation(() => String, {
        description: 'Return a fresh session ID.',
    })
    async openSession(): Promise<string> {
        const sessionId = this.generateSessionId();
        console.log('openSession', sessionId);
        await this.elasticSearchService.index({ action: 'open session', sessionId });
        return sessionId;
    }

    private generateSessionId(): string {
        return Math.random().toString(36).replace('0.', '') + Date.now().toString(36);
    }
}
