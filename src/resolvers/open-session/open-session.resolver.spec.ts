import { Test, TestingModule } from '@nestjs/testing';
import { OpenSessionResolver } from './open-session.resolver';

describe('OpenSessionResolver', () => {
    let resolver: OpenSessionResolver;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [OpenSessionResolver],
        }).compile();

        resolver = module.get<OpenSessionResolver>(OpenSessionResolver);
    });

    it('should be defined', () => {
        expect(resolver).toBeDefined();
    });
});
