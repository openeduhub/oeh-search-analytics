import { Plugin } from '@nestjs/graphql';
import { ApolloServerPlugin, GraphQLRequestContext } from 'apollo-server-plugin-base';

export const SEPARATOR =
    '-----------------------------------------------------------------------\n';

@Plugin()
export class LogRequestsPlugin implements ApolloServerPlugin {
    requestDidStart(requestContext: GraphQLRequestContext): void {
        console.log(
            'GraphQL request\n' +
                'Query:\n' +
                SEPARATOR +
                requestContext.request.query +
                '\n' +
                SEPARATOR +
                'Variables:\n' +
                JSON.stringify(requestContext.request.variables, null, 2) +
                '\n' +
                SEPARATOR,
        );
    }
}
