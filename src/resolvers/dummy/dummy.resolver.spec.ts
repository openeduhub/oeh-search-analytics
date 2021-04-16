import { Test, TestingModule } from '@nestjs/testing';
import { DummyResolver } from './dummy.resolver';

describe('DummyResolver', () => {
    let resolver: DummyResolver;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [DummyResolver],
        }).compile();

        resolver = module.get<DummyResolver>(DummyResolver);
    });

    it('should be defined', () => {
        expect(resolver).toBeDefined();
    });
});
