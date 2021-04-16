import { ArgsType, Field, Int } from '@nestjs/graphql';
import { IsJSON } from 'class-validator';
import { Language } from '../../../models/language.model';

@ArgsType()
export class SearchRequestArgs {
    @Field()
    sessionId: string;

    @Field()
    searchString: string;

    @Field(() => Int)
    page: number;

    @Field()
    @IsJSON()
    filters: string;

    @Field()
    filtersSidebarIsVisible: boolean;

    @Field(() => Language)
    language: Language;

    @Field(() => Int)
    numberResults: number;
}
