import * as Types from './types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetEnrollmentsByFiltersQueryVariables = Types.Exact<{
    semester?: Types.InputMaybe<Types.Scalars['String']>;
    group?: Types.InputMaybe<Types.Scalars['String']>;
    subject?: Types.InputMaybe<Types.Scalars['String']>;
}>;

export type GetEnrollmentsByFiltersQuery = {
    __typename?: 'Query';
    getEnrollmentsByFilters: Array<{
        __typename?: 'Enrollment';
        id: string;
        user: string;
        group: string;
        subject: string;
        semester: string;
        finalGrade?: number | null;
    }>;
};

export type GetEnrollmentByIdQueryVariables = Types.Exact<{
    id: Types.Scalars['String'];
}>;

export type GetEnrollmentByIdQuery = {
    __typename?: 'Query';
    getEnrollmentById: {
        __typename?: 'Enrollment';
        id: string;
        user: string;
        group: string;
        subject: string;
        semester: string;
        finalGrade?: number | null;
    };
};

export type CreateEnrollmentMutationVariables = Types.Exact<{
    semester: Types.Scalars['String'];
    group: Types.Scalars['String'];
    subject: Types.Scalars['String'];
}>;

export type CreateEnrollmentMutation = {
    __typename?: 'Mutation';
    createEnrollment: {
        __typename?: 'Enrollment';
        id: string;
        user: string;
        group: string;
        subject: string;
        semester: string;
        finalGrade?: number | null;
    };
};

export type CancelEnrollmentMutationVariables = Types.Exact<{
    semester: Types.Scalars['String'];
    subject: Types.Scalars['String'];
}>;

export type CancelEnrollmentMutation = {
    __typename?: 'Mutation';
    cancelEnrollment: {
        __typename?: 'Enrollment';
        id: string;
        user: string;
        group: string;
        subject: string;
        semester: string;
        finalGrade?: number | null;
    };
};

export const GetEnrollmentsByFiltersDocument = gql`
    query GetEnrollmentsByFilters(
        $semester: String
        $group: String
        $subject: String
    ) {
        getEnrollmentsByFilters(
            semester: $semester
            group: $group
            subject: $subject
        ) {
            id
            user
            group
            subject
            semester
            finalGrade
        }
    }
`;

@Injectable({
    providedIn: 'root',
})
export class GetEnrollmentsByFiltersGQL extends Apollo.Query<
    GetEnrollmentsByFiltersQuery,
    GetEnrollmentsByFiltersQueryVariables
> {
    override document = GetEnrollmentsByFiltersDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
export const GetEnrollmentByIdDocument = gql`
    query GetEnrollmentById($id: String!) {
        getEnrollmentById(id: $id) {
            id
            user
            group
            subject
            semester
            finalGrade
        }
    }
`;

@Injectable({
    providedIn: 'root',
})
export class GetEnrollmentByIdGQL extends Apollo.Query<
    GetEnrollmentByIdQuery,
    GetEnrollmentByIdQueryVariables
> {
    override document = GetEnrollmentByIdDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
export const CreateEnrollmentDocument = gql`
    mutation CreateEnrollment(
        $semester: String!
        $group: String!
        $subject: String!
    ) {
        createEnrollment(
            semester: $semester
            group: $group
            subject: $subject
        ) {
            id
            user
            group
            subject
            semester
            finalGrade
        }
    }
`;

@Injectable({
    providedIn: 'root',
})
export class CreateEnrollmentGQL extends Apollo.Mutation<
    CreateEnrollmentMutation,
    CreateEnrollmentMutationVariables
> {
    override document = CreateEnrollmentDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
export const CancelEnrollmentDocument = gql`
    mutation CancelEnrollment($semester: String!, $subject: String!) {
        cancelEnrollment(semester: $semester, subject: $subject) {
            id
            user
            group
            subject
            semester
            finalGrade
        }
    }
`;

@Injectable({
    providedIn: 'root',
})
export class CancelEnrollmentGQL extends Apollo.Mutation<
    CancelEnrollmentMutation,
    CancelEnrollmentMutationVariables
> {
    override document = CancelEnrollmentDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
