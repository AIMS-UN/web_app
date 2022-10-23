import * as Types from './types';

import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
import { gql } from 'apollo-angular';
export type GetScheduleQueryVariables = Types.Exact<{
    userId: Types.Scalars['String'];
}>;

export type GetScheduleQuery = {
    __typename?: 'Query';
    getSchedule: Array<{
        __typename?: 'Enrollment';
        id: string;
        user: string;
        group: string;
        subject: string;
        semester: string;
        finalGrade?: number | null;
    }>;
};

export type GetScheduleBySemesterQueryVariables = Types.Exact<{
    semester: Types.Scalars['String'];
    userId: Types.Scalars['String'];
}>;

export type GetScheduleBySemesterQuery = {
    __typename?: 'Query';
    getScheduleBySemester: Array<{
        __typename?: 'Enrollment';
        id: string;
        user: string;
        group: string;
        subject: string;
        semester: string;
        finalGrade?: number | null;
    }>;
};

export const GetScheduleDocument = gql`
    query GetSchedule($userId: String!) {
        getSchedule(userId: $userId) {
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
export class GetScheduleGQL extends Apollo.Query<
    GetScheduleQuery,
    GetScheduleQueryVariables
> {
    override document = GetScheduleDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
export const GetScheduleBySemesterDocument = gql`
    query GetScheduleBySemester($semester: String!, $userId: String!) {
        getScheduleBySemester(semester: $semester, userId: $userId) {
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
export class GetScheduleBySemesterGQL extends Apollo.Query<
    GetScheduleBySemesterQuery,
    GetScheduleBySemesterQueryVariables
> {
    override document = GetScheduleBySemesterDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
