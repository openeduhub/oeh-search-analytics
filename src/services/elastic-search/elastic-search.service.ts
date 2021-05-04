import { Client } from '@elastic/elasticsearch';
import { Index } from '@elastic/elasticsearch/api/requestParams';
import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ElasticSearchService {
    private readonly client: Client;
    private readonly elasticSearchIndex: string;
    private readonly logger = new Logger(ElasticSearchService.name);

    constructor(configService: ConfigService) {
        this.client = new Client({
            node: configService.get<string>('ELASTICSEARCH_URL', 'http://localhost:9200'),
        });
        this.elasticSearchIndex = configService.get<string>(
            'ELASTICSEARCH_INDEX',
            'oeh-search-analytics',
        );
    }

    async index(body: Index<Record<string, any>>['body']): Promise<void> {
        body = { ...body, timestamp: new Date().toISOString() };
        this.logger.log(body);
        await this.client.index({
            index: this.elasticSearchIndex,
            body,
        });
    }
}
