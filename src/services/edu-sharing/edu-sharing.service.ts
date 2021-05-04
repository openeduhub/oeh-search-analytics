import { HttpService, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EduSharingService {
    private readonly eduSharingUrl = this.configService.get<string>(
        'EDU_SHARING_URL',
        'https://redaktion.openeduhub.net/edu-sharing',
    );
    private readonly restUrl = this.eduSharingUrl + '/rest';

    constructor(
        private readonly configService: ConfigService,
        private readonly httpService: HttpService,
    ) {}

    async reportView(clickedResult: any): Promise<void> {
        if (clickedResult.lom.technical.location.startsWith(this.eduSharingUrl)) {
            // Don't report views of Edu-Sharing content since Edu-Sharing tracks these itself.
            return;
        }
        const repository = '-home-';
        const event = 'VIEW_MATERIAL';
        await this.httpService
            .put(this.restUrl + `/tracking/v1/tracking/${repository}/${event}`, null, {
                params: { node: clickedResult.id },
            })
            .toPromise();
    }
}
