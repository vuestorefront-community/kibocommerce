import { CustomQuery, Context } from '@vue-storefront/core';
import defaultQuery from './defaultQuery';
import { GetRelatedProductsParams, GetRelatedProductsResponse } from '../../types/Api';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default async function getRelatedProducts(context: Context, params: GetRelatedProductsParams, customQuery?: CustomQuery): Promise<GetRelatedProductsResponse> {
  const { products } = context.extendQuery(customQuery, {
    products: {
      query: defaultQuery,
      variables: {
        filter: `${(params.catId[0]) !== null ? 'categoryId req ' + params.catId[0] + ' and ' : ''}productCode ne '${params.id}'`,
        pageSize: params.limit
      }
    }
  });

  return context.client.query({
    query: products.query,
    variables: products.variables,
    fetchPolicy: 'no-cache'
  });
}
