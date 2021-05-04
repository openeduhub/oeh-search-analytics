import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../../app.module';
import { LifecycleEventResolver } from './lifecycle-event.resolver';

describe('LifecycleEventResolver', () => {
    let resolver: LifecycleEventResolver;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();

        resolver = module.get<LifecycleEventResolver>(LifecycleEventResolver);
    });

    it('should be defined', () => {
        expect(resolver).toBeDefined();
    });
});
