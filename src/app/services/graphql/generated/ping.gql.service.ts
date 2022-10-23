import * as Types from './types';

import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
import { gql } from 'apollo-angular';
export type PingQueryVariables = Types.Exact<{ [key: string]: never }>;

export type PingQuery = { __typename?: 'Query'; ping: string };

export type PongQueryVariables = Types.Exact<{ [key: string]: never }>;

export type PongQuery = { __typename?: 'Query'; pong: string };

export type GetDataQueryVariables = Types.Exact<{
    msName: Types.Scalars['String'];
}>;

export type GetDataQuery = {
    __typename?: 'Query';
    getData: { __typename?: 'Data'; name: string; message?: string | null };
};

export const PingDocument = gql`
    query Ping {
        ping
    }
`;

@Injectable({
    providedIn: 'root',
})
export class PingGQL extends Apollo.Query<PingQuery, PingQueryVariables> {
    override document = PingDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
export const PongDocument = gql`
    query Pong {
        pong
    }
`;

@Injectable({
    providedIn: 'root',
})
export class PongGQL extends Apollo.Query<PongQuery, PongQueryVariables> {
    override document = PongDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
export const GetDataDocument = gql`
    query GetData($msName: String!) {
        getData(msName: $msName) {
            name
            message
        }
    }
`;

@Injectable({
    providedIn: 'root',
})
export class GetDataGQL extends Apollo.Query<
    GetDataQuery,
    GetDataQueryVariables
> {
    override document = GetDataDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
