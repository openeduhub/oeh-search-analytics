import { Args, Int, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
export class SearchResolver {
    // @Mutation((returns) => Int)
    // async upvotePost(@Args({ name: 'postId', type: () => Int }) postId: number) {
    //     return 5;
    // }
}
