import { ArgsType, Field, Int } from '@nestjs/graphql';
import { Language } from './language.model';

@ArgsType()
export class SearchRequestArgs {
    @Field()
    sessionId: string;

    @Field({ nullable: true })
    searchString?: string;

    @Field(() => Int)
    page: number;

    @Field({ nullable: true })
    filters?: string;

    @Field()
    filtersSidebarIsVisible: boolean;

    @Field(() => Language)
    language: Language;

    @Field(() => Int)
    numberResults: number;
}
