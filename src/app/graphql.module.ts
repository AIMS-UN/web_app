import { HttpHeaders } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {
    ApolloClientOptions,
    ApolloLink,
    InMemoryCache,
} from '@apollo/client/core';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';

const uri = 'http://localhost:3000/graphql'; // <-- add the URL of the GraphQL server here
export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
    const http = httpLink.create({ uri, withCredentials: true });

    const contentType = setContext((operation, context) => ({
        headers: new HttpHeaders().set('Content-Type', 'application/json'),
    }));

    const proto = setContext((operation, context) => ({
        headers: new HttpHeaders().set('x-forwarded-proto', 'https'),
    }));

    const errorLink = onError(({ graphQLErrors, networkError }) => {
        if (graphQLErrors)
            graphQLErrors.map(({ message, locations, path }) =>
                console.log(
                    `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
                )
            );
        if (networkError) console.log(`[Network error]: ${networkError}`);
    });

    return {
        link: ApolloLink.from([contentType, proto, errorLink, http]),
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
