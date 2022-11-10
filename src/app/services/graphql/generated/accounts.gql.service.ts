import * as Types from './types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type MyAccountQueryVariables = Types.Exact<{ [key: string]: never }>;

export type MyAccountQuery = {
    __typename?: 'Query';
    myAccount: {
        __typename?: 'User';
        id: string;
        username: string;
        role: string;
        updatedAt?: string | null;
        createdAt?: string | null;
    };
};

export type GetUserByIdMutationVariables = Types.Exact<{
    userId: Types.Scalars['String'];
}>;

export type GetUserByIdMutation = {
    __typename?: 'Mutation';
    getUserByID: {
        __typename?: 'User';
        id: string;
        username: string;
        role: string;
        updatedAt?: string | null;
        createdAt?: string | null;
    };
};

export type LoginMutationVariables = Types.Exact<{
    password: Types.Scalars['String'];
    username: Types.Scalars['String'];
}>;

export type LoginMutation = {
    __typename?: 'Mutation';
    login: {
        __typename?: 'User';
        id: string;
        username: string;
        role: string;
        updatedAt?: string | null;
        createdAt?: string | null;
    };
};

export type RegisterMutationVariables = Types.Exact<{
    role: Types.Scalars['String'];
    username: Types.Scalars['String'];
    password: Types.Scalars['String'];
}>;

export type RegisterMutation = {
    __typename?: 'Mutation';
    register: {
        __typename?: 'User';
        id: string;
        username: string;
        role: string;
        updatedAt?: string | null;
        createdAt?: string | null;
    };
};

export type LogoutMutationVariables = Types.Exact<{ [key: string]: never }>;

export type LogoutMutation = { __typename?: 'Mutation'; logout: boolean };

export type UpdateUserMutationVariables = Types.Exact<{
    role: Types.Scalars['String'];
    password: Types.Scalars['String'];
    username: Types.Scalars['String'];
}>;

export type UpdateUserMutation = {
    __typename?: 'Mutation';
    updateUser: {
        __typename?: 'User';
        id: string;
        username: string;
        role: string;
        updatedAt?: string | null;
        createdAt?: string | null;
    };
};

export const MyAccountDocument = gql`
    query MyAccount {
        myAccount {
            id
            username
            role
            updatedAt
            createdAt
        }
    }
`;

@Injectable({
    providedIn: 'root',
})
export class MyAccountGQL extends Apollo.Query<
    MyAccountQuery,
    MyAccountQueryVariables
> {
    override document = MyAccountDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
export const GetUserByIdDocument = gql`
    mutation GetUserByID($userId: String!) {
        getUserByID(userID: $userId) {
            id
            username
            role
            updatedAt
            createdAt
        }
    }
`;

@Injectable({
    providedIn: 'root',
})
export class GetUserByIdGQL extends Apollo.Mutation<
    GetUserByIdMutation,
    GetUserByIdMutationVariables
> {
    override document = GetUserByIdDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
export const LoginDocument = gql`
    mutation Login($password: String!, $username: String!) {
        login(password: $password, username: $username) {
            id
            username
            role
            updatedAt
            createdAt
        }
    }
`;

@Injectable({
    providedIn: 'root',
})
export class LoginGQL extends Apollo.Mutation<
    LoginMutation,
    LoginMutationVariables
> {
    override document = LoginDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
export const RegisterDocument = gql`
    mutation Register($role: String!, $username: String!, $password: String!) {
        register(role: $role, username: $username, password: $password) {
            id
            username
            role
            updatedAt
            createdAt
        }
    }
`;

@Injectable({
    providedIn: 'root',
})
export class RegisterGQL extends Apollo.Mutation<
    RegisterMutation,
    RegisterMutationVariables
> {
    override document = RegisterDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
export const LogoutDocument = gql`
    mutation Logout {
        logout
    }
`;

@Injectable({
    providedIn: 'root',
})
export class LogoutGQL extends Apollo.Mutation<
    LogoutMutation,
    LogoutMutationVariables
> {
    override document = LogoutDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
export const UpdateUserDocument = gql`
    mutation UpdateUser(
        $role: String!
        $password: String!
        $username: String!
    ) {
        updateUser(role: $role, password: $password, username: $username) {
            id
            username
            role
            updatedAt
            createdAt
        }
    }
`;

@Injectable({
    providedIn: 'root',
})
export class UpdateUserGQL extends Apollo.Mutation<
    UpdateUserMutation,
    UpdateUserMutationVariables
> {
    override document = UpdateUserDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
