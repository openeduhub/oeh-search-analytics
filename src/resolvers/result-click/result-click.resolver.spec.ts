import { Test, TestingModule } from '@nestjs/testing';
import { ResultClickResolver } from './result-click.resolver';

describe('ResultClickResolver', () => {
    let resolver: ResultClickResolver;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [ResultClickResolver],
        }).compile();

        resolver = module.get<ResultClickResolver>(ResultClickResolver);
    });

    it('should be defined', () => {
        expect(resolver).toBeDefined();
    });
});
