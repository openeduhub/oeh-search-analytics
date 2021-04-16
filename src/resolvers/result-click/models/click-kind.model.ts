import { registerEnumType } from '@nestjs/graphql';

export enum ClickKind {
    click = 'click',
    middleClick = 'middleClick',
    contextmenu = 'contextmenu',
}

registerEnumType(ClickKind, {
    name: 'ClickKind',
});
