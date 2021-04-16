import { ArgsType, Field, Int } from '@nestjs/graphql';
import { IsJSON } from 'class-validator';
import { Language } from '../../../models/language.model';
import { ClickKind } from './click-kind.model';

@ArgsType()
export class ResultClickArgs {
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

    @Field()
    clickedResultId: string;

    @Field(() => ClickKind)
    clickKind: ClickKind;
}
