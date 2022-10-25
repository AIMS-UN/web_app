import * as Types from './types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetProfilesQueryVariables = Types.Exact<{ [key: string]: never }>;

export type GetProfilesQuery = {
    __typename?: 'Query';
    getProfiles: Array<{
        __typename?: 'Profile';
        user_id: string;
        name: string;
        lastname: string;
        email: string;
        birthdate: string;
        phone_number: string;
        address: string;
        historials: Array<{
            __typename?: 'Historials';
            coursed_credits: number;
            approved_credits: number;
            reprobed_credits: number;
            GPA: number;
            career: number;
        }>;
    }>;
};

export type GetProfilesByIdQueryVariables = Types.Exact<{
    userId: Types.Scalars['String'];
}>;

export type GetProfilesByIdQuery = {
    __typename?: 'Query';
    getProfilesById: {
        __typename?: 'Profile';
        user_id: string;
        name: string;
        lastname: string;
        email: string;
        birthdate: string;
        phone_number: string;
        address: string;
        historials: Array<{
            __typename?: 'Historials';
            coursed_credits: number;
            approved_credits: number;
            reprobed_credits: number;
            GPA: number;
            career: number;
        }>;
    };
};

export type GetMyProfileQueryVariables = Types.Exact<{ [key: string]: never }>;

export type GetMyProfileQuery = {
    __typename?: 'Query';
    getMyProfile: {
        __typename?: 'Profile';
        user_id: string;
        name: string;
        lastname: string;
        email: string;
        birthdate: string;
        phone_number: string;
        address: string;
        historials: Array<{
            __typename?: 'Historials';
            coursed_credits: number;
            approved_credits: number;
            reprobed_credits: number;
            GPA: number;
            career: number;
        }>;
    };
};

export type CreateProfileMutationVariables = Types.Exact<{
    profileInput: Types.ProfileInput;
}>;

export type CreateProfileMutation = {
    __typename?: 'Mutation';
    createProfile: string;
};

export type UpdateProfileMutationVariables = Types.Exact<{
    profileInput: Types.ProfileInput;
}>;

export type UpdateProfileMutation = {
    __typename?: 'Mutation';
    updateProfile: string;
};

export type MutationMutationVariables = Types.Exact<{ [key: string]: never }>;

export type MutationMutation = {
    __typename?: 'Mutation';
    deleteProfile: string;
};

export const GetProfilesDocument = gql`
    query GetProfiles {
        getProfiles {
            user_id
            name
            lastname
            email
            birthdate
            phone_number
            address
            historials {
                coursed_credits
                approved_credits
                reprobed_credits
                GPA
                career
            }
        }
    }
`;

@Injectable({
    providedIn: 'root',
})
export class GetProfilesGQL extends Apollo.Query<
    GetProfilesQuery,
    GetProfilesQueryVariables
> {
    override document = GetProfilesDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
export const GetProfilesByIdDocument = gql`
    query GetProfilesById($userId: String!) {
        getProfilesById(user_id: $userId) {
            user_id
            name
            lastname
            email
            birthdate
            phone_number
            address
            historials {
                coursed_credits
                approved_credits
                reprobed_credits
                GPA
                career
            }
        }
    }
`;

@Injectable({
    providedIn: 'root',
})
export class GetProfilesByIdGQL extends Apollo.Query<
    GetProfilesByIdQuery,
    GetProfilesByIdQueryVariables
> {
    override document = GetProfilesByIdDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
export const GetMyProfileDocument = gql`
    query GetMyProfile {
        getMyProfile {
            user_id
            name
            lastname
            email
            birthdate
            phone_number
            address
            historials {
                coursed_credits
                approved_credits
                reprobed_credits
                GPA
                career
            }
        }
    }
`;

@Injectable({
    providedIn: 'root',
})
export class GetMyProfileGQL extends Apollo.Query<
    GetMyProfileQuery,
    GetMyProfileQueryVariables
> {
    override document = GetMyProfileDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
export const CreateProfileDocument = gql`
    mutation CreateProfile($profileInput: ProfileInput!) {
        createProfile(profileInput: $profileInput)
    }
`;

@Injectable({
    providedIn: 'root',
})
export class CreateProfileGQL extends Apollo.Mutation<
    CreateProfileMutation,
    CreateProfileMutationVariables
> {
    override document = CreateProfileDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
export const UpdateProfileDocument = gql`
    mutation UpdateProfile($profileInput: ProfileInput!) {
        updateProfile(profileInput: $profileInput)
    }
`;

@Injectable({
    providedIn: 'root',
})
export class UpdateProfileGQL extends Apollo.Mutation<
    UpdateProfileMutation,
    UpdateProfileMutationVariables
> {
    override document = UpdateProfileDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
export const MutationDocument = gql`
    mutation Mutation {
        deleteProfile
    }
`;

@Injectable({
    providedIn: 'root',
})
export class MutationGQL extends Apollo.Mutation<
    MutationMutation,
    MutationMutationVariables
> {
    override document = MutationDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
