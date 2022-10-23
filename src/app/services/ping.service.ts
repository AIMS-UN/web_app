import { Injectable } from '@angular/core';
import { gql, Query } from 'apollo-angular';

export interface Response {
    ping: string;
}

@Injectable({
    providedIn: 'root',
})
export class PingGQLService extends Query<Response> {
    override document = gql`
        query Ping {
            ping
        }
    `;
}
