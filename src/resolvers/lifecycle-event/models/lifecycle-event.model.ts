import { registerEnumType } from '@nestjs/graphql';

export enum LifecycleEvent {
    visibilitychange = 'visibilitychange',
    pagehide = 'pagehide',
}

registerEnumType(LifecycleEvent, {
    name: 'LifecycleEvent',
});
