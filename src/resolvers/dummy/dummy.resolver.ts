import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class DummyResolver {
    @Query(() => String, {
        description: 'Returns an empty string. GraphQL requires at least one Query to be defined.',
    })
    dummy(): string {
        return '';
    }
}
