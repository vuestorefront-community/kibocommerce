/* eslint-disable */
import { ApolloQueryResult } from 'apollo-client';
import { FetchResult } from 'apollo-link';

import {
    CategoryCollection,
    Order,
    CustomerAccount
} from './GraphQL'

export type QueryResponse<K extends string, V> = ApolloQueryResult<Record<K, V>>;
export type OrderQueryResponse = QueryResponse<'order', Order>;
export type OrderMutationResponse = QueryResponse<'order', Order>;

export type CustomerResponse = QueryResponse<'customerAccount', CustomerAccount>
interface ApiMethods {
    getCategory (params): Promise<QueryResponse<'categories', CategoryCollection>>;
}