import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../../app.module';
import { ResultClickResolver } from './result-click.resolver';

describe('ResultClickResolver', () => {
    let resolver: ResultClickResolver;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();

        resolver = module.get<ResultClickResolver>(ResultClickResolver);
    });

    it('should be defined', () => {
        expect(resolver).toBeDefined();
    });
});
