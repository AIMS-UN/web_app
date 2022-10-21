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

export type Category = {
    __typename?: 'Category';
    group_id: Scalars['String'];
    id: Scalars['String'];
    name: Scalars['String'];
    subject_id: Scalars['String'];
    weight: Scalars['Float'];
};

export type Data = {
    __typename?: 'Data';
    message?: Maybe<Scalars['String']>;
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

export type Grade = {
    __typename?: 'Grade';
    category_id: Scalars['String'];
    id: Scalars['String'];
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
    category_id: Scalars['String'];
    score: Scalars['Float'];
    student_id: Scalars['String'];
};

export type MutationCreateGradingCategoryArgs = {
    group_id: Scalars['String'];
    name: Scalars['String'];
    subject_id: Scalars['String'];
    weight: Scalars['Float'];
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
    category_id: Scalars['String'];
    id: Scalars['String'];
    score: Scalars['Float'];
    student_id: Scalars['String'];
};

export type MutationUpdateGradingCategoryArgs = {
    groupId: Scalars['String'];
    id: Scalars['String'];
    name: Scalars['String'];
    subject_id: Scalars['String'];
    weight: Scalars['Float'];
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
    getData: Data;
    getEnrollmentById: Enrollment;
    getEnrollmentsByFilters: Array<Enrollment>;
    getGradeById: Grade;
    getGrades: Array<Grade>;
    getGradingCategories: Array<Category>;
    getGradingCategory: Category;
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

export type QueryGetDataArgs = {
    msName: Scalars['String'];
};

export type QueryGetEnrollmentByIdArgs = {
    id: Scalars['String'];
};

export type QueryGetEnrollmentsByFiltersArgs = {
    group?: InputMaybe<Scalars['String']>;
    semester?: InputMaybe<Scalars['String']>;
    subject?: InputMaybe<Scalars['String']>;
};

export type QueryGetGradeByIdArgs = {
    id: Scalars['String'];
};

export type QueryGetGradingCategoryArgs = {
    id: Scalars['String'];
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
    code: Scalars['Float'];
};

export type QueryGetSubjectbyNameArgs = {
    name: Scalars['String'];
};

export type Subject = {
    __typename?: 'Subject';
    career: Scalars['Float'];
    code: Scalars['Float'];
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

export type GetGradingCategoriesQueryVariables = Exact<{
    [key: string]: never;
}>;

export type GetGradingCategoriesQuery = {
    __typename?: 'Query';
    getGradingCategories: Array<{
        __typename?: 'Category';
        id: string;
        name: string;
        weight: number;
        group_id: string;
        subject_id: string;
    }>;
};

export type GetGradingCategoryQueryVariables = Exact<{
    id: Scalars['String'];
}>;

export type GetGradingCategoryQuery = {
    __typename?: 'Query';
    getGradingCategory: {
        __typename?: 'Category';
        id: string;
        name: string;
        weight: number;
        group_id: string;
        subject_id: string;
    };
};

export type GetGradesQueryVariables = Exact<{ [key: string]: never }>;

export type GetGradesQuery = {
    __typename?: 'Query';
    getGrades: Array<{
        __typename?: 'Grade';
        id: string;
        category_id: string;
        student_id: string;
        score: number;
    }>;
};

export type GetGradeByIdQueryVariables = Exact<{
    getGradeByIdId: Scalars['String'];
}>;

export type GetGradeByIdQuery = {
    __typename?: 'Query';
    getGradeById: {
        __typename?: 'Grade';
        id: string;
        category_id: string;
        student_id: string;
        score: number;
    };
};

export const GetGradingCategoriesDocument = gql`
    query GetGradingCategories {
        getGradingCategories {
            id
            name
            weight
            group_id
            subject_id
        }
    }
`;

@Injectable({
    providedIn: 'root',
})
export class GetGradingCategoriesGQL extends Apollo.Query<
    GetGradingCategoriesQuery,
    GetGradingCategoriesQueryVariables
> {
    override document = GetGradingCategoriesDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
export const GetGradingCategoryDocument = gql`
    query GetGradingCategory($id: String!) {
        getGradingCategory(id: $id) {
            id
            name
            weight
            group_id
            subject_id
        }
    }
`;

@Injectable({
    providedIn: 'root',
})
export class GetGradingCategoryGQL extends Apollo.Query<
    GetGradingCategoryQuery,
    GetGradingCategoryQueryVariables
> {
    override document = GetGradingCategoryDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
export const GetGradesDocument = gql`
    query GetGrades {
        getGrades {
            id
            category_id
            student_id
            score
        }
    }
`;

@Injectable({
    providedIn: 'root',
})
export class GetGradesGQL extends Apollo.Query<
    GetGradesQuery,
    GetGradesQueryVariables
> {
    override document = GetGradesDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
export const GetGradeByIdDocument = gql`
    query GetGradeById($getGradeByIdId: String!) {
        getGradeById(id: $getGradeByIdId) {
            id
            category_id
            student_id
            score
        }
    }
`;

@Injectable({
    providedIn: 'root',
})
export class GetGradeByIdGQL extends Apollo.Query<
    GetGradeByIdQuery,
    GetGradeByIdQueryVariables
> {
    override document = GetGradeByIdDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
