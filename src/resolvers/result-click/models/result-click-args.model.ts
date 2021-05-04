import { ArgsType, Field, Int } from '@nestjs/graphql';
import { IsJSON } from 'class-validator';
import { GeneralArgs } from '../../../models/general-args.model';
import { ClickKind } from './click-kind.model';

@ArgsType()
export class ResultClickArgs extends GeneralArgs {
    @Field()
    searchString!: string;

    @Field(() => Int)
    page!: number;

    @Field()
    @IsJSON()
    filters!: string;

    @Field()
    filtersSidebarIsVisible!: boolean;

    @Field()
    @IsJSON()
    clickedResult!: string;

    @Field(() => ClickKind)
    clickKind!: ClickKind;
}
