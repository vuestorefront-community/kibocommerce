import { CustomQuery, Context } from '@vue-storefront/core';
import { buildProductSearchVars } from './_util';
import productSearchQuery from './defaultQuery';
import { ProductSearchParams, ProductSearchResponse } from '../../types/Api';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default async function getProduct(context: Context, params: ProductSearchParams, customQuery?: CustomQuery): Promise<ProductSearchResponse> {
  const searchVars = buildProductSearchVars(params);
  const { productSearch } = context.extendQuery(customQuery,
    { productSearch: { query: productSearchQuery, variables: searchVars } }
  );
  return context.client.query({
    query: productSearch.query,
    variables: productSearch.variables,
    fetchPolicy: 'no-cache'
  });
}
