import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../../app.module';
import { Language } from '../../models/language.model';
import { SearchRequestResolver } from './search-request.resolver';

describe('SearchRequestResolver', () => {
    let resolver: SearchRequestResolver;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();

        resolver = module.get<SearchRequestResolver>(SearchRequestResolver);
    });

    it('should be defined', () => {
        expect(resolver).toBeDefined();
    });

    it('should index a search request', async () => {
        await resolver.searchRequest({
            filters: '{}',
            filtersSidebarIsVisible: false,
            language: Language.de,
            numberResults: 42,
            page: 0,
            searchString: '',
            sessionId: '',
        });
    });
});
