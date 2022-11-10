import * as Types from './types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetEnrollmentsByFiltersQueryVariables = Types.Exact<{
    semester?: Types.InputMaybe<Types.Scalars['String']>;
    groupId?: Types.InputMaybe<Types.Scalars['String']>;
    subjectId?: Types.InputMaybe<Types.Scalars['Float']>;
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
    enrollmentId: Types.Scalars['String'];
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
    groupId: Types.Scalars['String'];
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
    subjectId: Types.Scalars['String'];
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
        $groupId: String
        $subjectId: Float
    ) {
        getEnrollmentsByFilters(
            semester: $semester
            groupId: $groupId
            subjectId: $subjectId
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
    query GetEnrollmentById($enrollmentId: String!) {
        getEnrollmentById(enrollmentId: $enrollmentId) {
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
    mutation CreateEnrollment($semester: String!, $groupId: String!) {
        createEnrollment(semester: $semester, groupId: $groupId) {
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
    mutation CancelEnrollment($semester: String!, $subjectId: String!) {
        cancelEnrollment(semester: $semester, subjectId: $subjectId) {
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
