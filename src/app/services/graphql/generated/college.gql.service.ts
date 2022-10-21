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

export type Careers = {
    __typename?: 'Careers';
    careerId: Scalars['Float'];
    credits: Scalars['String'];
    departments: Departments;
    name: Scalars['String'];
};

export type Category = {
    __typename?: 'Category';
    group_id: Scalars['String'];
    id: Scalars['String'];
    name: Scalars['String'];
    subject_code: Scalars['String'];
    weight: Scalars['Float'];
};

export type CategoryInput = {
    group_id: Scalars['String'];
    name: Scalars['String'];
    subject_code: Scalars['String'];
    weight: Scalars['Float'];
};

export type ClassGroups = {
    __typename?: 'ClassGroups';
    classGroupId: Scalars['String'];
    max_capacity: Scalars['Float'];
    teacher_id: Scalars['String'];
};

export type Data = {
    __typename?: 'Data';
    message?: Maybe<Scalars['String']>;
    name: Scalars['String'];
};

export type Departments = {
    __typename?: 'Departments';
    departmentId: Scalars['Float'];
    faculties: Faculties;
    name: Scalars['String'];
};

export type Enrollment = {
    __typename?: 'Enrollment';
    finalGrade?: Maybe<Scalars['Float']>;
    group: Scalars['String'];
    id: Scalars['String'];
    semester: Scalars['String'];
    subject: Scalars['String'];
    user: Scalars['String'];
};

export type Faculties = {
    __typename?: 'Faculties';
    facultyId: Scalars['Float'];
    name: Scalars['String'];
};

export type Grade = {
    __typename?: 'Grade';
    category_id: Scalars['String'];
    id: Scalars['String'];
    score: Scalars['Float'];
    student_id: Scalars['String'];
};

export type GradeInput = {
    category_id: Scalars['String'];
    score: Scalars['Float'];
    student_id: Scalars['String'];
};

export type Historials = {
    __typename?: 'Historials';
    GPA: Scalars['Float'];
    approved_credits: Scalars['Float'];
    career: Scalars['Float'];
    coursed_credits: Scalars['Float'];
    enrollment_id: Scalars['Float'];
    reprobed_credits: Scalars['Float'];
};

export type Mutation = {
    __typename?: 'Mutation';
    cancelEnrollment: Enrollment;
    createEnrollment: Enrollment;
    createGrade: Scalars['String'];
    createGradingCategory: Scalars['String'];
    deleteGrade: Scalars['String'];
    deleteGradingCategory: Scalars['String'];
    getUserByID: User;
    login: User;
    logout: Scalars['Boolean'];
    register: User;
    updateGrade: Scalars['String'];
    updateGradingCategory: Scalars['String'];
    updateUser: User;
};

export type MutationCancelEnrollmentArgs = {
    semester: Scalars['String'];
    subject: Scalars['String'];
};

export type MutationCreateEnrollmentArgs = {
    group: Scalars['String'];
    semester: Scalars['String'];
    subject: Scalars['String'];
};

export type MutationCreateGradeArgs = {
    grade_input: GradeInput;
};

export type MutationCreateGradingCategoryArgs = {
    category_input: CategoryInput;
};

export type MutationDeleteGradeArgs = {
    id: Scalars['String'];
};

export type MutationDeleteGradingCategoryArgs = {
    id: Scalars['String'];
};

export type MutationGetUserByIdArgs = {
    userID: Scalars['String'];
};

export type MutationLoginArgs = {
    password: Scalars['String'];
    username: Scalars['String'];
};

export type MutationRegisterArgs = {
    password: Scalars['String'];
    role: Scalars['String'];
    username: Scalars['String'];
};

export type MutationUpdateGradeArgs = {
    grade_input: GradeInput;
    id: Scalars['String'];
};

export type MutationUpdateGradingCategoryArgs = {
    category_input: CategoryInput;
    id: Scalars['String'];
};

export type MutationUpdateUserArgs = {
    password: Scalars['String'];
    role: Scalars['String'];
    username: Scalars['String'];
};

export type Profile = {
    __typename?: 'Profile';
    address: Scalars['String'];
    birthdate: Scalars['String'];
    email: Scalars['String'];
    historials: Array<Historials>;
    lastname: Scalars['String'];
    name: Scalars['String'];
    phone_number: Scalars['String'];
    user_id: Scalars['String'];
};

export type Query = {
    __typename?: 'Query';
    getCareerById: Careers;
    getCareerbyName: Array<Careers>;
    getData: Data;
    getDepartmentById: Departments;
    getDepartmentbyName: Array<Departments>;
    getEnrollmentById: Enrollment;
    getEnrollmentsByFilters: Array<Enrollment>;
    getFacultyById: Faculties;
    getFacultybyName: Array<Faculties>;
    getGrade: Grade;
    getGrades: Array<Grade>;
    getGradingCategories: Array<Category>;
    getGradingCategory: Category;
    getGroupById: ClassGroups;
    getProfiles: Array<Profile>;
    getProfilesById: Profile;
    getSchedule: Array<Enrollment>;
    getScheduleBySemester: Array<Enrollment>;
    getSubjectbyCareer: Array<Subject>;
    getSubjectbyCode: Array<Subject>;
    getSubjectbyName: Array<Subject>;
    myAccount: User;
    ping: Scalars['String'];
    pingAuth: Scalars['String'];
    pingStudent: Scalars['String'];
    pingTeacher: Scalars['String'];
    pong: Scalars['String'];
};

export type QueryGetCareerByIdArgs = {
    careerId: Scalars['Float'];
};

export type QueryGetCareerbyNameArgs = {
    name: Scalars['String'];
};

export type QueryGetDataArgs = {
    msName: Scalars['String'];
};

export type QueryGetDepartmentByIdArgs = {
    departmentId: Scalars['Float'];
};

export type QueryGetDepartmentbyNameArgs = {
    name: Scalars['String'];
};

export type QueryGetEnrollmentByIdArgs = {
    id: Scalars['String'];
};

export type QueryGetEnrollmentsByFiltersArgs = {
    group?: InputMaybe<Scalars['String']>;
    semester?: InputMaybe<Scalars['String']>;
    subject?: InputMaybe<Scalars['String']>;
};

export type QueryGetFacultyByIdArgs = {
    facultyId: Scalars['Float'];
};

export type QueryGetFacultybyNameArgs = {
    name: Scalars['String'];
};

export type QueryGetGradeArgs = {
    id: Scalars['String'];
};

export type QueryGetGradesArgs = {
    category_id?: InputMaybe<Scalars['String']>;
    student_id?: InputMaybe<Scalars['String']>;
};

export type QueryGetGradingCategoriesArgs = {
    group_id?: InputMaybe<Scalars['String']>;
    subject_code?: InputMaybe<Scalars['String']>;
};

export type QueryGetGradingCategoryArgs = {
    id: Scalars['String'];
};

export type QueryGetGroupByIdArgs = {
    classGroupId: Scalars['String'];
};

export type QueryGetProfilesByIdArgs = {
    user_id: Scalars['String'];
};

export type QueryGetScheduleArgs = {
    userId: Scalars['String'];
};

export type QueryGetScheduleBySemesterArgs = {
    semester: Scalars['String'];
    userId: Scalars['String'];
};

export type QueryGetSubjectbyCareerArgs = {
    career: Scalars['Float'];
};

export type QueryGetSubjectbyCodeArgs = {
    code: Scalars['String'];
};

export type QueryGetSubjectbyNameArgs = {
    name: Scalars['String'];
};

export type Subject = {
    __typename?: 'Subject';
    career: Scalars['Float'];
    code: Scalars['String'];
    credits: Scalars['Float'];
    curriculum?: Maybe<Scalars['String']>;
    name: Scalars['String'];
    subject_id: Scalars['Float'];
};

export type User = {
    __typename?: 'User';
    createdAt?: Maybe<Scalars['String']>;
    id: Scalars['ID'];
    role: Scalars['String'];
    updatedAt?: Maybe<Scalars['String']>;
    username: Scalars['String'];
};

export type GetGroupByIdQueryVariables = Exact<{
    classGroupId: Scalars['String'];
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

export type GetFacultybyNameQueryVariables = Exact<{
    name: Scalars['String'];
}>;

export type GetFacultybyNameQuery = {
    __typename?: 'Query';
    getFacultybyName: Array<{
        __typename?: 'Faculties';
        facultyId: number;
        name: string;
    }>;
};

export type GetDepartmentbyNameQueryVariables = Exact<{
    name: Scalars['String'];
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

export type GetCareerbyNameQueryVariables = Exact<{
    name: Scalars['String'];
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

export type GetCareerByIdQueryVariables = Exact<{
    careerId: Scalars['Float'];
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

export type GetDepartmentByIdQueryVariables = Exact<{
    departmentId: Scalars['Float'];
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

export type GetFacultyByIdQueryVariables = Exact<{
    facultyId: Scalars['Float'];
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
