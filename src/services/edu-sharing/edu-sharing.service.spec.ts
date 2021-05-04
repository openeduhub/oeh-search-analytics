import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../../app.module';
import { EduSharingService } from './edu-sharing.service';

describe('EduSharingService', () => {
    let service: EduSharingService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();

        service = module.get<EduSharingService>(EduSharingService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
