import * as Types from './types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
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

export type CreateGradingCategoryMutationVariables = Types.Exact<{
    categoryInput: Types.CategoryInput;
}>;

export type CreateGradingCategoryMutation = {
    __typename?: 'Mutation';
    createGradingCategory: string;
};

export type UpdateGradingCategoryMutationVariables = Types.Exact<{
    categoryInput: Types.CategoryInput;
    updateGradingCategoryId: Types.Scalars['String'];
}>;

export type UpdateGradingCategoryMutation = {
    __typename?: 'Mutation';
    updateGradingCategory: string;
};

export type DeleteGradingCategoryMutationVariables = Types.Exact<{
    deleteGradingCategoryId: Types.Scalars['String'];
}>;

export type DeleteGradingCategoryMutation = {
    __typename?: 'Mutation';
    deleteGradingCategory: string;
};

export type CreateGradeMutationVariables = Types.Exact<{
    gradeInput: Types.GradeInput;
}>;

export type CreateGradeMutation = {
    __typename?: 'Mutation';
    createGrade: string;
};

export type UpdateGradeMutationVariables = Types.Exact<{
    gradeInput: Types.GradeInput;
    updateGradeId: Types.Scalars['String'];
}>;

export type UpdateGradeMutation = {
    __typename?: 'Mutation';
    updateGrade: string;
};

export type DeleteGradeMutationVariables = Types.Exact<{
    deleteGradeId: Types.Scalars['String'];
}>;

export type DeleteGradeMutation = {
    __typename?: 'Mutation';
    deleteGrade: string;
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
export const CreateGradingCategoryDocument = gql`
    mutation CreateGradingCategory($categoryInput: CategoryInput!) {
        createGradingCategory(categoryInput: $categoryInput)
    }
`;

@Injectable({
    providedIn: 'root',
})
export class CreateGradingCategoryGQL extends Apollo.Mutation<
    CreateGradingCategoryMutation,
    CreateGradingCategoryMutationVariables
> {
    override document = CreateGradingCategoryDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
export const UpdateGradingCategoryDocument = gql`
    mutation UpdateGradingCategory(
        $categoryInput: CategoryInput!
        $updateGradingCategoryId: String!
    ) {
        updateGradingCategory(
            categoryInput: $categoryInput
            id: $updateGradingCategoryId
        )
    }
`;

@Injectable({
    providedIn: 'root',
})
export class UpdateGradingCategoryGQL extends Apollo.Mutation<
    UpdateGradingCategoryMutation,
    UpdateGradingCategoryMutationVariables
> {
    override document = UpdateGradingCategoryDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
export const DeleteGradingCategoryDocument = gql`
    mutation DeleteGradingCategory($deleteGradingCategoryId: String!) {
        deleteGradingCategory(id: $deleteGradingCategoryId)
    }
`;

@Injectable({
    providedIn: 'root',
})
export class DeleteGradingCategoryGQL extends Apollo.Mutation<
    DeleteGradingCategoryMutation,
    DeleteGradingCategoryMutationVariables
> {
    override document = DeleteGradingCategoryDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
export const CreateGradeDocument = gql`
    mutation CreateGrade($gradeInput: GradeInput!) {
        createGrade(gradeInput: $gradeInput)
    }
`;

@Injectable({
    providedIn: 'root',
})
export class CreateGradeGQL extends Apollo.Mutation<
    CreateGradeMutation,
    CreateGradeMutationVariables
> {
    override document = CreateGradeDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
export const UpdateGradeDocument = gql`
    mutation UpdateGrade($gradeInput: GradeInput!, $updateGradeId: String!) {
        updateGrade(gradeInput: $gradeInput, id: $updateGradeId)
    }
`;

@Injectable({
    providedIn: 'root',
})
export class UpdateGradeGQL extends Apollo.Mutation<
    UpdateGradeMutation,
    UpdateGradeMutationVariables
> {
    override document = UpdateGradeDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
export const DeleteGradeDocument = gql`
    mutation DeleteGrade($deleteGradeId: String!) {
        deleteGrade(id: $deleteGradeId)
    }
`;

@Injectable({
    providedIn: 'root',
})
export class DeleteGradeGQL extends Apollo.Mutation<
    DeleteGradeMutation,
    DeleteGradeMutationVariables
> {
    override document = DeleteGradeDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
