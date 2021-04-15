import { Client } from '@elastic/elasticsearch';
import { Index } from '@elastic/elasticsearch/api/requestParams';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ElasticSearchService {
    private readonly client: Client;
    private readonly elasticSearchIndex: string;

    constructor(configService: ConfigService) {
        this.client = new Client({ node: configService.get<string>('ELASTICSEARCH_URL') });
        this.elasticSearchIndex = configService.get<string>('ELASTICSEARCH_INDEX');
    }

    async index(body: Index<Record<string, any>>['body']): Promise<void> {
        await this.client.index({ index: this.elasticSearchIndex, body });
    }
}
