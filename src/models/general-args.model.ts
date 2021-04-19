import { ArgsType, Field } from '@nestjs/graphql';
import { ClientInformationArgs } from './client-information-args.model';

@ArgsType()
export class GeneralArgs extends ClientInformationArgs {
    @Field()
    sessionId!: string;
}
