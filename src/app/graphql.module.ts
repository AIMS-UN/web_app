import { NgModule } from '@angular/core';
import {
    ApolloClientOptions,
    ApolloLink,
    InMemoryCache,
} from '@apollo/client/core';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';

const uri = 'http://localhost:3000/graphql'; // <-- add the URL of the GraphQL server here
export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
    const http = httpLink.create({ uri, withCredentials: true });

    const middleware = new ApolloLink((operation, forward) => {
        operation.setContext({
            headers: {
                'Content-Type': 'application/json',
                'x-forwarded-proto': 'https',
            },
        });
        return forward(operation);
    });

    return {
        link: ApolloLink.from([middleware, http]),
        cache: new InMemoryCache(),
    };
}

@NgModule({
    exports: [ApolloModule],
    providers: [
        {
            provide: APOLLO_OPTIONS,
            useFactory: createApollo,
            deps: [HttpLink],
        },
    ],
})
export class GraphQLModule {}
