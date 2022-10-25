import * as Types from './types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
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

export type PingAuthQueryVariables = Types.Exact<{ [key: string]: never }>;

export type PingAuthQuery = { __typename?: 'Query'; pingAuth: string };

export type PingStudentQueryVariables = Types.Exact<{ [key: string]: never }>;

export type PingStudentQuery = { __typename?: 'Query'; pingStudent: string };

export type PingTeacherQueryVariables = Types.Exact<{ [key: string]: never }>;

export type PingTeacherQuery = { __typename?: 'Query'; pingTeacher: string };

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
export const PingAuthDocument = gql`
    query PingAuth {
        pingAuth
    }
`;

@Injectable({
    providedIn: 'root',
})
export class PingAuthGQL extends Apollo.Query<
    PingAuthQuery,
    PingAuthQueryVariables
> {
    override document = PingAuthDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
export const PingStudentDocument = gql`
    query PingStudent {
        pingStudent
    }
`;

@Injectable({
    providedIn: 'root',
})
export class PingStudentGQL extends Apollo.Query<
    PingStudentQuery,
    PingStudentQueryVariables
> {
    override document = PingStudentDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
export const PingTeacherDocument = gql`
    query PingTeacher {
        pingTeacher
    }
`;

@Injectable({
    providedIn: 'root',
})
export class PingTeacherGQL extends Apollo.Query<
    PingTeacherQuery,
    PingTeacherQueryVariables
> {
    override document = PingTeacherDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
