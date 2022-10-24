import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { ApolloClientOptions, InMemoryCache } from '@apollo/client/core';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';

const uri = 'http://localhost:3000/graphql';
export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
    const http = httpLink.create({ uri });

    return {
        link: http,
        cache: new InMemoryCache(),
    };
}

@NgModule({
    exports: [ApolloModule, HttpClientModule],
    providers: [
        {
            provide: APOLLO_OPTIONS,
            useFactory: createApollo,
            deps: [HttpLink],
        },
    ],
})
export class GraphQLModule {}
