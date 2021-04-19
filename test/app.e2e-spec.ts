import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
    let app: INestApplication;

    beforeEach(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();

        app = moduleFixture.createNestApplication();
        app.useGlobalPipes(new ValidationPipe({ skipMissingProperties: true }));
        await app.init();
    });

    it('dummy query', () => {
        return request(app.getHttpServer())
            .post('/graphql')
            .send({
                query: '{ dummy }',
            })
            .expect(200)
            .expect({ data: { dummy: '' } });
    });

    it('search-request', () => {
        const body = {
            query: `
                mutation {
                    searchRequest(
                        sessionId: ""
                        searchString: ""
                        page: 0
                        filters: "{}"
                        filtersSidebarIsVisible: true
                        language: en
                        numberResults: 142494
                    )
                }
            `,
        };
        return request(app.getHttpServer())
            .post('/graphql')
            .send(body)
            .on('error', (err) => console.log(JSON.parse(err.response.text)))
            .expect(200)
            .expect({ data: { searchRequest: null } });
    });

    it('search-request filters', () => {
        const body = {
            query: `
                mutation {
                    searchRequest(
                        sessionId: ""
                        searchString: ""
                        page: 0
                        filters: "{\\"type\\":[\\"content\\"]}"
                        filtersSidebarIsVisible: true
                        language: en
                        numberResults: 142494
                    )
                }
            `,
        };
        return request(app.getHttpServer())
            .post('/graphql')
            .send(body)
            .expect(200)
            .expect({ data: { searchRequest: null } });
    });

    it('search-request filters, invalid JSON', () => {
        const body = {
            query: `
                mutation {
                    searchRequest(
                        sessionId: ""
                        searchString: ""
                        page: 0
                        filters: "{\\"type\\":[\\"content\\"}"
                        filtersSidebarIsVisible: true
                        language: en
                        numberResults: 142494
                    )
                }
            `,
        };
        return request(app.getHttpServer())
            .post('/graphql')
            .send(body)
            .expect(200)
            .expect((res) =>
                expect(res.body).toEqual({
                    data: { searchRequest: null },
                    errors: [expect.objectContaining({ message: 'Bad Request Exception' })],
                }),
            );
    });
});
