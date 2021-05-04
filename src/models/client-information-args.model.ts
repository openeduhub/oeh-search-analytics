import { ArgsType, Field, Int } from '@nestjs/graphql';
import { Language } from './language.model';

@ArgsType()
export class ClientInformationArgs {
    @Field()
    userAgent!: string;

    @Field(() => Int)
    screenWidth!: number;

    @Field(() => Int)
    screenHeight!: number;

    @Field(() => Language)
    language!: Language;
}
