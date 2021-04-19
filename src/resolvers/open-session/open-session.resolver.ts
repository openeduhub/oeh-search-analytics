import { Logger } from '@nestjs/common';
import { Mutation, Resolver } from '@nestjs/graphql';
import { ElasticSearchService } from '../../services/elastic-search/elastic-search.service';

@Resolver()
export class OpenSessionResolver {
    private readonly logger = new Logger(OpenSessionResolver.name);

    constructor(private readonly elasticSearchService: ElasticSearchService) {}

    @Mutation(() => String, {
        description: 'Return a fresh session ID.',
    })
    async openSession(): Promise<string> {
        const sessionId = this.generateSessionId();
        const body = { action: 'open session', sessionId };
        this.logger.log(body);
        await this.elasticSearchService.index(body);
        return sessionId;
    }

    private generateSessionId(): string {
        return Math.random().toString(36).replace('0.', '') + Date.now().toString(36);
    }
}
