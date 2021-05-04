import { ArgsType, Field } from '@nestjs/graphql';
import { GeneralArgs } from '../../../models/general-args.model';
import { LifecycleEvent } from './lifecycle-event.model';

@ArgsType()
export class LifecycleEventArgs extends GeneralArgs {
    @Field(() => LifecycleEvent)
    event!: LifecycleEvent;

    @Field()
    state!: string;
}
