import * as Types from './types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetCareersQueryVariables = Types.Exact<{ [key: string]: never }>;

export type GetCareersQuery = {
    __typename?: 'Query';
    getCareers: Array<{
        __typename?: 'CareerResponse';
        careerId: number;
        careerName: string;
        credits: string;
        department: {
            __typename?: 'Department_Faculty';
            departmentId: number;
            departmentName: string;
            faculty: {
                __typename?: 'Faculty';
                facultyId: number;
                facultyName: string;
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
        __typename?: 'CareerResponse';
        careerId: number;
        careerName: string;
        credits: string;
        department: {
            __typename?: 'Department_Faculty';
            departmentId: number;
            departmentName: string;
            faculty: {
                __typename?: 'Faculty';
                facultyId: number;
                facultyName: string;
            };
        };
    };
};

export type GetDepartmentsQueryVariables = Types.Exact<{
    [key: string]: never;
}>;

export type GetDepartmentsQuery = {
    __typename?: 'Query';
    getDepartments: Array<{
        __typename?: 'DepartmentResponse';
        departmentId: number;
        departmentName: string;
        faculty: {
            __typename?: 'Faculty';
            facultyId: number;
            facultyName: string;
        };
        careers: Array<{
            __typename?: 'Career';
            careerId: number;
            careerName: string;
            credits: string;
        }>;
    }>;
};

export type GetDepartmentByIdQueryVariables = Types.Exact<{
    departmentId: Types.Scalars['Float'];
}>;

export type GetDepartmentByIdQuery = {
    __typename?: 'Query';
    getDepartmentById: {
        __typename?: 'DepartmentResponse';
        departmentId: number;
        departmentName: string;
        faculty: {
            __typename?: 'Faculty';
            facultyId: number;
            facultyName: string;
        };
        careers: Array<{
            __typename?: 'Career';
            careerId: number;
            careerName: string;
            credits: string;
        }>;
    };
};

export type GetFacultiesQueryVariables = Types.Exact<{ [key: string]: never }>;

export type GetFacultiesQuery = {
    __typename?: 'Query';
    getFaculties: Array<{
        __typename?: 'FacultyResponse';
        facultyId: number;
        facultyName: string;
        departments: Array<{
            __typename?: 'Department_Career';
            departmentId: number;
            departmentName: string;
            careers: Array<{
                __typename?: 'Career';
                careerId: number;
                careerName: string;
                credits: string;
            }>;
        }>;
    }>;
};

export type GetFacultyByIdQueryVariables = Types.Exact<{
    facultyId: Types.Scalars['Float'];
}>;

export type GetFacultyByIdQuery = {
    __typename?: 'Query';
    getFacultyById: {
        __typename?: 'FacultyResponse';
        facultyId: number;
        facultyName: string;
        departments: Array<{
            __typename?: 'Department_Career';
            departmentId: number;
            departmentName: string;
            careers: Array<{
                __typename?: 'Career';
                careerId: number;
                careerName: string;
                credits: string;
            }>;
        }>;
    };
};

export const GetCareersDocument = gql`
    query GetCareers {
        getCareers {
            careerId
            careerName
            credits
            department {
                departmentId
                departmentName
                faculty {
                    facultyId
                    facultyName
                }
            }
        }
    }
`;

@Injectable({
    providedIn: 'root',
})
export class GetCareersGQL extends Apollo.Query<
    GetCareersQuery,
    GetCareersQueryVariables
> {
    override document = GetCareersDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
export const GetCareerByIdDocument = gql`
    query GetCareerById($careerId: Float!) {
        getCareerById(careerId: $careerId) {
            careerId
            careerName
            credits
            department {
                departmentId
                departmentName
                faculty {
                    facultyId
                    facultyName
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
export const GetDepartmentsDocument = gql`
    query GetDepartments {
        getDepartments {
            departmentId
            departmentName
            faculty {
                facultyId
                facultyName
            }
            careers {
                careerId
                careerName
                credits
            }
        }
    }
`;

@Injectable({
    providedIn: 'root',
})
export class GetDepartmentsGQL extends Apollo.Query<
    GetDepartmentsQuery,
    GetDepartmentsQueryVariables
> {
    override document = GetDepartmentsDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
export const GetDepartmentByIdDocument = gql`
    query GetDepartmentById($departmentId: Float!) {
        getDepartmentById(departmentId: $departmentId) {
            departmentId
            departmentName
            faculty {
                facultyId
                facultyName
            }
            careers {
                careerId
                careerName
                credits
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
export const GetFacultiesDocument = gql`
    query GetFaculties {
        getFaculties {
            facultyId
            facultyName
            departments {
                departmentId
                departmentName
                careers {
                    careerId
                    careerName
                    credits
                }
            }
        }
    }
`;

@Injectable({
    providedIn: 'root',
})
export class GetFacultiesGQL extends Apollo.Query<
    GetFacultiesQuery,
    GetFacultiesQueryVariables
> {
    override document = GetFacultiesDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
export const GetFacultyByIdDocument = gql`
    query GetFacultyById($facultyId: Float!) {
        getFacultyById(facultyId: $facultyId) {
            facultyId
            facultyName
            departments {
                departmentId
                departmentName
                careers {
                    careerId
                    careerName
                    credits
                }
            }
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
