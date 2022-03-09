import { HttpService, Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EduSharingService {
    private readonly eduSharingUrl = this.configService.get<string>(
        'EDUSHARING_URL',
        'http://localhost:4200/edu-sharing',
    );
    private readonly restUrl = this.eduSharingUrl + '/rest';
    private readonly logger = new Logger(EduSharingService.name);

    constructor(
        private readonly configService: ConfigService,
        private readonly httpService: HttpService,
    ) {}

    async reportView(clickedResult: any): Promise<void> {
        if (!clickedResult.properties['ccm:wwwurl']) {
            // Don't report views of Edu-Sharing content since Edu-Sharing tracks these itself.
            return;
        }
        const event = 'VIEW_MATERIAL';
        this.logger.log(`Reporting click to ${this.restUrl}`);
        await this.httpService
            .put(
                this.restUrl + `/tracking/v1/tracking/${clickedResult.ref.repo}/${event}`,
                {},
                {
                    params: { node: clickedResult.ref.id },
                },
            )
            .toPromise();
    }
}
