import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { NgModule } from '@angular/core';

import {
    ApolloClientOptions,
    ApolloLink,
    InMemoryCache,
} from '@apollo/client/core';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';

import { setContext } from '@apollo/client/link/context';

const uri = 'http://localhost:3000/graphql';
export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
    const http = httpLink.create({ uri, withCredentials: true });

    const auth = setContext((_, { headers }) => {
        const token = localStorage.getItem('token');
        console.log(token);
        if (token === null) {
            console.log('token null');
            return {};
        } else {
            return {
                headers: new HttpHeaders().set('token', `${token}`),
            };
        }
    });

    const proto = setContext((operation, context) => {
        return {
            headers: {
                'x-forwarded-proto': 'https',
            },
        };
    });

    return {
        link: ApolloLink.from([proto, http]),
        cache: new InMemoryCache(),
        credentials: 'include',
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
