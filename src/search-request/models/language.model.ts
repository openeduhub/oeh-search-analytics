import { registerEnumType } from '@nestjs/graphql';

export enum Language {
    de = 'de',
    en = 'en',
}

registerEnumType(Language, {
    name: 'Language',
});
