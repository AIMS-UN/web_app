import * as Types from './types';

import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
import { gql } from 'apollo-angular';
export type GetSubjectbyNameQueryVariables = Types.Exact<{
    name: Types.Scalars['String'];
}>;

export type GetSubjectbyNameQuery = {
    __typename?: 'Query';
    getSubjectbyName: Array<{
        __typename?: 'Subject';
        subject_id: number;
        name: string;
        curriculum?: string | null;
        credits: number;
        code: string;
        career: number;
    }>;
};

export type GetSubjectbyCodeQueryVariables = Types.Exact<{
    code: Types.Scalars['String'];
}>;

export type GetSubjectbyCodeQuery = {
    __typename?: 'Query';
    getSubjectbyCode: Array<{
        __typename?: 'Subject';
        subject_id: number;
        name: string;
        curriculum?: string | null;
        credits: number;
        code: string;
        career: number;
    }>;
};

export type GetSubjectbyCareerQueryVariables = Types.Exact<{
    career: Types.Scalars['Float'];
}>;

export type GetSubjectbyCareerQuery = {
    __typename?: 'Query';
    getSubjectbyCareer: Array<{
        __typename?: 'Subject';
        subject_id: number;
        name: string;
        curriculum?: string | null;
        credits: number;
        code: string;
        career: number;
    }>;
};

export const GetSubjectbyNameDocument = gql`
    query GetSubjectbyName($name: String!) {
        getSubjectbyName(name: $name) {
            subject_id
            name
            curriculum
            credits
            code
            career
        }
    }
`;

@Injectable({
    providedIn: 'root',
})
export class GetSubjectbyNameGQL extends Apollo.Query<
    GetSubjectbyNameQuery,
    GetSubjectbyNameQueryVariables
> {
    override document = GetSubjectbyNameDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
export const GetSubjectbyCodeDocument = gql`
    query GetSubjectbyCode($code: String!) {
        getSubjectbyCode(code: $code) {
            subject_id
            name
            curriculum
            credits
            code
            career
        }
    }
`;

@Injectable({
    providedIn: 'root',
})
export class GetSubjectbyCodeGQL extends Apollo.Query<
    GetSubjectbyCodeQuery,
    GetSubjectbyCodeQueryVariables
> {
    override document = GetSubjectbyCodeDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
export const GetSubjectbyCareerDocument = gql`
    query GetSubjectbyCareer($career: Float!) {
        getSubjectbyCareer(career: $career) {
            subject_id
            name
            curriculum
            credits
            code
            career
        }
    }
`;

@Injectable({
    providedIn: 'root',
})
export class GetSubjectbyCareerGQL extends Apollo.Query<
    GetSubjectbyCareerQuery,
    GetSubjectbyCareerQueryVariables
> {
    override document = GetSubjectbyCareerDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
