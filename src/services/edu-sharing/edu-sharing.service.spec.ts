import { Test, TestingModule } from '@nestjs/testing';
import { EduSharingService } from './edu-sharing.service';

describe('EduSharingService', () => {
    let service: EduSharingService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [EduSharingService],
        }).compile();

        service = module.get<EduSharingService>(EduSharingService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
