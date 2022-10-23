import * as Types from './types';

import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
import { gql } from 'apollo-angular';
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
            enrollment_id: number;
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
            enrollment_id: number;
            career: number;
        }>;
    };
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
                enrollment_id
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
                enrollment_id
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
