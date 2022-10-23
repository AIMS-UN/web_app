import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
import { gql } from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
    [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
};

export type Data = {
    __typename?: 'Data';
    message?: Maybe<Scalars['String']>;
    name: Scalars['String'];
};

export type QueryGetDataArgs = {
    msName: Scalars['String'];
};

export type PingQueryVariables = Exact<{ [key: string]: never }>;

export type PingQuery = { __typename?: 'Query'; ping: string };

export type PongQueryVariables = Exact<{ [key: string]: never }>;

export type PongQuery = { __typename?: 'Query'; pong: string };

export type GetDataQueryVariables = Exact<{
    msName: Scalars['String'];
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
