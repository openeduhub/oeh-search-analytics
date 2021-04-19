import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../../app.module';
import { OpenSessionResolver } from './open-session.resolver';

describe('OpenSessionResolver', () => {
    let resolver: OpenSessionResolver;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();

        resolver = module.get<OpenSessionResolver>(OpenSessionResolver);
    });

    it('should be defined', () => {
        expect(resolver).toBeDefined();
    });
});
