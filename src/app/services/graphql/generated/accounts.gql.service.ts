import * as Types from './types';

import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
import { gql } from 'apollo-angular';
export type MyAccountQueryVariables = Types.Exact<{ [key: string]: never }>;

export type MyAccountQuery = {
    __typename?: 'Query';
    myAccount: {
        __typename?: 'User';
        id: string;
        username: string;
        role: string;
        updatedAt?: string | null;
        createdAt?: string | null;
    };
};

export const MyAccountDocument = gql`
    query MyAccount {
        myAccount {
            id
            username
            role
            updatedAt
            createdAt
        }
    }
`;

@Injectable({
    providedIn: 'root',
})
export class MyAccountGQL extends Apollo.Query<
    MyAccountQuery,
    MyAccountQueryVariables
> {
    override document = MyAccountDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
