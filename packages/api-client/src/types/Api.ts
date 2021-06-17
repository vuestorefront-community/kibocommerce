/* eslint-disable */
import { ApolloQueryResult } from 'apollo-client';

import {
    CategoryCollection
} from './GraphQL'

export type QueryResponse<K extends string, V> = ApolloQueryResult<Record<K, V>>;

interface ApiMethods {
    getCategory (params): Promise<QueryResponse<'categories', CategoryCollection>>;
}