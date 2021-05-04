import { Test, TestingModule } from '@nestjs/testing';
import { LifecycleEventResolver } from './lifecycle-event.resolver';

describe('LifecycleEventResolver', () => {
    let resolver: LifecycleEventResolver;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [LifecycleEventResolver],
        }).compile();

        resolver = module.get<LifecycleEventResolver>(LifecycleEventResolver);
    });

    it('should be defined', () => {
        expect(resolver).toBeDefined();
    });
});
