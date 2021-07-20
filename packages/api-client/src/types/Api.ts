/* eslint-disable */
import { ApolloQueryResult } from 'apollo-client';
import { FetchResult } from 'apollo-link';

import { CategoryCollection, Order, CustomerAccount } from './GraphQL';

export type QueryResponse<K extends string, V> = ApolloQueryResult<
  Record<K, V>
>;
export type OrderQueryResponse = QueryResponse<'order', Order>;
export type OrderMutationResponse = QueryResponse<'order', Order>;

export type CustomerResponse = QueryResponse<
  'customerAccount',
  CustomerAccount
>;
interface ApiMethods {
  getCategory(params): Promise<QueryResponse<'categories', CategoryCollection>>;
}

export interface IUpdateCustomerDataParams {
  accountId: number;
  customerAccountInput: {
    emailAddress: string;
    userName: string;
    firstName: string;
    lastName: string;
    isAnonymous: boolean;
    isLocked: boolean;
    isActive: boolean;
    acceptsMarketing: boolean;
    hasExternalPassword: boolean;
    id: number;
    taxExempt: boolean;
  };
}
