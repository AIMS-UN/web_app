import * as Types from './types';

import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
import { gql } from 'apollo-angular';
export type GetGradingCategoriesQueryVariables = Types.Exact<{
    subjectCode?: Types.InputMaybe<Types.Scalars['String']>;
    groupId?: Types.InputMaybe<Types.Scalars['String']>;
}>;

export type GetGradingCategoriesQuery = {
    __typename?: 'Query';
    getGradingCategories: Array<{
        __typename?: 'Category';
        id: string;
        name: string;
        weight: number;
        group_id: string;
        subject_code: string;
    }>;
};

export type GetGradingCategoryQueryVariables = Types.Exact<{
    id: Types.Scalars['String'];
}>;

export type GetGradingCategoryQuery = {
    __typename?: 'Query';
    getGradingCategory: {
        __typename?: 'Category';
        id: string;
        name: string;
        weight: number;
        group_id: string;
        subject_code: string;
    };
};

export type GetGradesQueryVariables = Types.Exact<{
    studentId?: Types.InputMaybe<Types.Scalars['String']>;
    categoryId?: Types.InputMaybe<Types.Scalars['String']>;
}>;

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

export type GetGradeQueryVariables = Types.Exact<{
    id: Types.Scalars['String'];
}>;

export type GetGradeQuery = {
    __typename?: 'Query';
    getGrade: {
        __typename?: 'Grade';
        id: string;
        category_id: string;
        student_id: string;
        score: number;
    };
};

export const GetGradingCategoriesDocument = gql`
    query GetGradingCategories($subjectCode: String, $groupId: String) {
        getGradingCategories(subject_code: $subjectCode, group_id: $groupId) {
            id
            name
            weight
            group_id
            subject_code
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
            subject_code
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
    query GetGrades($studentId: String, $categoryId: String) {
        getGrades(student_id: $studentId, category_id: $categoryId) {
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
export const GetGradeDocument = gql`
    query GetGrade($id: String!) {
        getGrade(id: $id) {
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
export class GetGradeGQL extends Apollo.Query<
    GetGradeQuery,
    GetGradeQueryVariables
> {
    override document = GetGradeDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
