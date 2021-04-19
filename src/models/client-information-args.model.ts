import { ArgsType, Field, Int } from '@nestjs/graphql';

@ArgsType()
export class ClientInformationArgs {
    @Field(() => Int)
    screenWidth!: number;

    @Field(() => Int)
    screenHeight!: number;
}
