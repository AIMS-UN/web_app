import * as Types from './types';

import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
import { gql } from 'apollo-angular';
export type GetGroupByIdQueryVariables = Types.Exact<{
    classGroupId: Types.Scalars['String'];
}>;

export type GetGroupByIdQuery = {
    __typename?: 'Query';
    getGroupById: {
        __typename?: 'ClassGroups';
        classGroupId: string;
        max_capacity: number;
        teacher_id: string;
    };
};

export type GetFacultybyNameQueryVariables = Types.Exact<{
    name: Types.Scalars['String'];
}>;

export type GetFacultybyNameQuery = {
    __typename?: 'Query';
    getFacultybyName: Array<{
        __typename?: 'Faculties';
        facultyId: number;
        name: string;
    }>;
};

export type GetDepartmentbyNameQueryVariables = Types.Exact<{
    name: Types.Scalars['String'];
}>;

export type GetDepartmentbyNameQuery = {
    __typename?: 'Query';
    getDepartmentbyName: Array<{
        __typename?: 'Departments';
        departmentId: number;
        name: string;
        faculties: {
            __typename?: 'Faculties';
            facultyId: number;
            name: string;
        };
    }>;
};

export type GetCareerbyNameQueryVariables = Types.Exact<{
    name: Types.Scalars['String'];
}>;

export type GetCareerbyNameQuery = {
    __typename?: 'Query';
    getCareerbyName: Array<{
        __typename?: 'Careers';
        careerId: number;
        name: string;
        credits: string;
        departments: {
            __typename?: 'Departments';
            departmentId: number;
            name: string;
            faculties: {
                __typename?: 'Faculties';
                facultyId: number;
                name: string;
            };
        };
    }>;
};

export type GetCareerByIdQueryVariables = Types.Exact<{
    careerId: Types.Scalars['Float'];
}>;

export type GetCareerByIdQuery = {
    __typename?: 'Query';
    getCareerById: {
        __typename?: 'Careers';
        careerId: number;
        name: string;
        credits: string;
        departments: {
            __typename?: 'Departments';
            departmentId: number;
            name: string;
            faculties: {
                __typename?: 'Faculties';
                facultyId: number;
                name: string;
            };
        };
    };
};

export type GetDepartmentByIdQueryVariables = Types.Exact<{
    departmentId: Types.Scalars['Float'];
}>;

export type GetDepartmentByIdQuery = {
    __typename?: 'Query';
    getDepartmentById: {
        __typename?: 'Departments';
        departmentId: number;
        name: string;
        faculties: {
            __typename?: 'Faculties';
            facultyId: number;
            name: string;
        };
    };
};

export type GetFacultyByIdQueryVariables = Types.Exact<{
    facultyId: Types.Scalars['Float'];
}>;

export type GetFacultyByIdQuery = {
    __typename?: 'Query';
    getFacultyById: {
        __typename?: 'Faculties';
        facultyId: number;
        name: string;
    };
};

export const GetGroupByIdDocument = gql`
    query GetGroupById($classGroupId: String!) {
        getGroupById(classGroupId: $classGroupId) {
            classGroupId
            max_capacity
            teacher_id
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
export const GetFacultybyNameDocument = gql`
    query GetFacultybyName($name: String!) {
        getFacultybyName(name: $name) {
            facultyId
            name
        }
    }
`;

@Injectable({
    providedIn: 'root',
})
export class GetFacultybyNameGQL extends Apollo.Query<
    GetFacultybyNameQuery,
    GetFacultybyNameQueryVariables
> {
    override document = GetFacultybyNameDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
export const GetDepartmentbyNameDocument = gql`
    query GetDepartmentbyName($name: String!) {
        getDepartmentbyName(name: $name) {
            departmentId
            name
            faculties {
                facultyId
                name
            }
        }
    }
`;

@Injectable({
    providedIn: 'root',
})
export class GetDepartmentbyNameGQL extends Apollo.Query<
    GetDepartmentbyNameQuery,
    GetDepartmentbyNameQueryVariables
> {
    override document = GetDepartmentbyNameDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
export const GetCareerbyNameDocument = gql`
    query GetCareerbyName($name: String!) {
        getCareerbyName(name: $name) {
            careerId
            name
            credits
            departments {
                departmentId
                name
                faculties {
                    facultyId
                    name
                }
            }
        }
    }
`;

@Injectable({
    providedIn: 'root',
})
export class GetCareerbyNameGQL extends Apollo.Query<
    GetCareerbyNameQuery,
    GetCareerbyNameQueryVariables
> {
    override document = GetCareerbyNameDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
export const GetCareerByIdDocument = gql`
    query GetCareerById($careerId: Float!) {
        getCareerById(careerId: $careerId) {
            careerId
            name
            credits
            departments {
                departmentId
                name
                faculties {
                    facultyId
                    name
                }
            }
        }
    }
`;

@Injectable({
    providedIn: 'root',
})
export class GetCareerByIdGQL extends Apollo.Query<
    GetCareerByIdQuery,
    GetCareerByIdQueryVariables
> {
    override document = GetCareerByIdDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
export const GetDepartmentByIdDocument = gql`
    query GetDepartmentById($departmentId: Float!) {
        getDepartmentById(departmentId: $departmentId) {
            departmentId
            name
            faculties {
                facultyId
                name
            }
        }
    }
`;

@Injectable({
    providedIn: 'root',
})
export class GetDepartmentByIdGQL extends Apollo.Query<
    GetDepartmentByIdQuery,
    GetDepartmentByIdQueryVariables
> {
    override document = GetDepartmentByIdDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
export const GetFacultyByIdDocument = gql`
    query GetFacultyById($facultyId: Float!) {
        getFacultyById(facultyId: $facultyId) {
            facultyId
            name
        }
    }
`;

@Injectable({
    providedIn: 'root',
})
export class GetFacultyByIdGQL extends Apollo.Query<
    GetFacultyByIdQuery,
    GetFacultyByIdQueryVariables
> {
    override document = GetFacultyByIdDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
