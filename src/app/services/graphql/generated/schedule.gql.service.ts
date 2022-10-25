import * as Types from './types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetMyScheduleQueryVariables = Types.Exact<{ [key: string]: never }>;

export type GetMyScheduleQuery = {
    __typename?: 'Query';
    getMySchedule: Array<{
        __typename?: 'ClassGroupResponse';
        groupId: string;
        maxCapacity: number;
        teacherId: string;
        subject: {
            __typename?: 'Subject';
            subjectId: number;
            subjectName: string;
            subjectCode: string;
            careerId: number;
            curriculum?: string | null;
            credits: number;
        };
        schedules: Array<{
            __typename?: 'Schedule';
            scheduleId: number;
            day: number;
            startTime: string;
            endTime: string;
            classroom: number;
            building: number;
        }>;
    }>;
};

export type GetMyScheduleBySemesterQueryVariables = Types.Exact<{
    semester: Types.Scalars['String'];
}>;

export type GetMyScheduleBySemesterQuery = {
    __typename?: 'Query';
    getMyScheduleBySemester: Array<{
        __typename?: 'ClassGroupResponse';
        groupId: string;
        maxCapacity: number;
        teacherId: string;
        subject: {
            __typename?: 'Subject';
            subjectId: number;
            subjectName: string;
            subjectCode: string;
            careerId: number;
            curriculum?: string | null;
            credits: number;
        };
        schedules: Array<{
            __typename?: 'Schedule';
            scheduleId: number;
            day: number;
            startTime: string;
            endTime: string;
            classroom: number;
            building: number;
        }>;
    }>;
};

export const GetMyScheduleDocument = gql`
    query GetMySchedule {
        getMySchedule {
            groupId
            maxCapacity
            teacherId
            subject {
                subjectId
                subjectName
                subjectCode
                careerId
                curriculum
                credits
            }
            schedules {
                scheduleId
                day
                startTime
                endTime
                classroom
                building
            }
        }
    }
`;

@Injectable({
    providedIn: 'root',
})
export class GetMyScheduleGQL extends Apollo.Query<
    GetMyScheduleQuery,
    GetMyScheduleQueryVariables
> {
    override document = GetMyScheduleDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
export const GetMyScheduleBySemesterDocument = gql`
    query GetMyScheduleBySemester($semester: String!) {
        getMyScheduleBySemester(semester: $semester) {
            groupId
            maxCapacity
            teacherId
            subject {
                subjectId
                subjectName
                subjectCode
                careerId
                curriculum
                credits
            }
            schedules {
                scheduleId
                day
                startTime
                endTime
                classroom
                building
            }
        }
    }
`;

@Injectable({
    providedIn: 'root',
})
export class GetMyScheduleBySemesterGQL extends Apollo.Query<
    GetMyScheduleBySemesterQuery,
    GetMyScheduleBySemesterQueryVariables
> {
    override document = GetMyScheduleBySemesterDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
