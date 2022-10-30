import * as Types from './types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetSubjectsQueryVariables = Types.Exact<{ [key: string]: never }>;

export type GetSubjectsQuery = {
    __typename?: 'Query';
    getSubjects: Array<{
        __typename?: 'SubjectResponse';
        subjectId: number;
        subjectName: string;
        subjectCode: string;
        careerId: number;
        curriculum?: string | null;
        credits: number;
        groups: Array<{
            __typename?: 'ClassGroup';
            groupId: string;
            maxCapacity: number;
            teacherId: string;
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
    }>;
};

export type GetSubjectByNameQueryVariables = Types.Exact<{
    subjectName: Types.Scalars['String'];
}>;

export type GetSubjectByNameQuery = {
    __typename?: 'Query';
    getSubjectByName: {
        __typename?: 'SubjectResponse';
        subjectId: number;
        subjectName: string;
        subjectCode: string;
        careerId: number;
        curriculum?: string | null;
        credits: number;
        groups: Array<{
            __typename?: 'ClassGroup';
            groupId: string;
            maxCapacity: number;
            teacherId: string;
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
};

export type GetSubjectByCodeQueryVariables = Types.Exact<{
    subjectCode: Types.Scalars['String'];
}>;

export type GetSubjectByCodeQuery = {
    __typename?: 'Query';
    getSubjectByCode: {
        __typename?: 'SubjectResponse';
        subjectId: number;
        subjectName: string;
        subjectCode: string;
        careerId: number;
        curriculum?: string | null;
        credits: number;
        groups: Array<{
            __typename?: 'ClassGroup';
            groupId: string;
            maxCapacity: number;
            teacherId: string;
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
};

export type GetSubjectByCareerQueryVariables = Types.Exact<{
    careerId: Types.Scalars['Float'];
}>;

export type GetSubjectByCareerQuery = {
    __typename?: 'Query';
    getSubjectByCareer: Array<{
        __typename?: 'SubjectResponse';
        subjectId: number;
        subjectName: string;
        subjectCode: string;
        careerId: number;
        curriculum?: string | null;
        credits: number;
        groups: Array<{
            __typename?: 'ClassGroup';
            groupId: string;
            maxCapacity: number;
            teacherId: string;
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
    }>;
};

export type GetSubjectByIdQueryVariables = Types.Exact<{
    subjectId: Types.Scalars['Float'];
}>;

export type GetSubjectByIdQuery = {
    __typename?: 'Query';
    getSubjectById: {
        __typename?: 'SubjectResponse';
        subjectId: number;
        subjectName: string;
        subjectCode: string;
        careerId: number;
        curriculum?: string | null;
        credits: number;
        groups: Array<{
            __typename?: 'ClassGroup';
            groupId: string;
            maxCapacity: number;
            teacherId: string;
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
};

export type GetClassGroupsQueryVariables = Types.Exact<{
    [key: string]: never;
}>;

export type GetClassGroupsQuery = {
    __typename?: 'Query';
    getClassGroups: Array<{
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

export type GetGroupByIdQueryVariables = Types.Exact<{
    classGroupId: Types.Scalars['String'];
}>;

export type GetGroupByIdQuery = {
    __typename?: 'Query';
    getGroupById: {
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
    };
};

export const GetSubjectsDocument = gql`
    query GetSubjects {
        getSubjects {
            subjectId
            subjectName
            subjectCode
            careerId
            curriculum
            credits
            groups {
                groupId
                maxCapacity
                teacherId
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
    }
`;

@Injectable({
    providedIn: 'root',
})
export class GetSubjectsGQL extends Apollo.Query<
    GetSubjectsQuery,
    GetSubjectsQueryVariables
> {
    override document = GetSubjectsDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
export const GetSubjectByNameDocument = gql`
    query GetSubjectByName($subjectName: String!) {
        getSubjectByName(subjectName: $subjectName) {
            subjectId
            subjectName
            subjectCode
            careerId
            curriculum
            credits
            groups {
                groupId
                maxCapacity
                teacherId
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
    }
`;

@Injectable({
    providedIn: 'root',
})
export class GetSubjectByNameGQL extends Apollo.Query<
    GetSubjectByNameQuery,
    GetSubjectByNameQueryVariables
> {
    override document = GetSubjectByNameDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
export const GetSubjectByCodeDocument = gql`
    query GetSubjectByCode($subjectCode: String!) {
        getSubjectByCode(subjectCode: $subjectCode) {
            subjectId
            subjectName
            subjectCode
            careerId
            curriculum
            credits
            groups {
                groupId
                maxCapacity
                teacherId
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
    }
`;

@Injectable({
    providedIn: 'root',
})
export class GetSubjectByCodeGQL extends Apollo.Query<
    GetSubjectByCodeQuery,
    GetSubjectByCodeQueryVariables
> {
    override document = GetSubjectByCodeDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
export const GetSubjectByCareerDocument = gql`
    query GetSubjectByCareer($careerId: Float!) {
        getSubjectByCareer(careerId: $careerId) {
            subjectId
            subjectName
            subjectCode
            careerId
            curriculum
            credits
            groups {
                groupId
                maxCapacity
                teacherId
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
    }
`;

@Injectable({
    providedIn: 'root',
})
export class GetSubjectByCareerGQL extends Apollo.Query<
    GetSubjectByCareerQuery,
    GetSubjectByCareerQueryVariables
> {
    override document = GetSubjectByCareerDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
export const GetSubjectByIdDocument = gql`
    query GetSubjectById($subjectId: Float!) {
        getSubjectById(subjectId: $subjectId) {
            subjectId
            subjectName
            subjectCode
            careerId
            curriculum
            credits
            groups {
                groupId
                maxCapacity
                teacherId
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
    }
`;

@Injectable({
    providedIn: 'root',
})
export class GetSubjectByIdGQL extends Apollo.Query<
    GetSubjectByIdQuery,
    GetSubjectByIdQueryVariables
> {
    override document = GetSubjectByIdDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
export const GetClassGroupsDocument = gql`
    query GetClassGroups {
        getClassGroups {
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
export class GetClassGroupsGQL extends Apollo.Query<
    GetClassGroupsQuery,
    GetClassGroupsQueryVariables
> {
    override document = GetClassGroupsDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
export const GetGroupByIdDocument = gql`
    query GetGroupById($classGroupId: String!) {
        getGroupById(classGroupId: $classGroupId) {
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
export class GetGroupByIdGQL extends Apollo.Query<
    GetGroupByIdQuery,
    GetGroupByIdQueryVariables
> {
    override document = GetGroupByIdDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
