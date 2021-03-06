import { ArgsType, Field, Int } from '@nestjs/graphql';
import { IsJSON } from 'class-validator';
import { GeneralArgs } from '../../../models/general-args.model';
import { Language } from '../../../models/language.model';

@ArgsType()
export class SearchRequestArgs extends GeneralArgs {
    @Field()
    searchString!: string;

    @Field(() => Int)
    page!: number;

    @Field()
    @IsJSON()
    filters!: string;

    @Field()
    filtersSidebarIsVisible!: boolean;

    @Field(() => Int)
    numberResults!: number;
}
