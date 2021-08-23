import { CustomQuery, Context } from '@vue-storefront/core';
import defaultQuery from './defaultQuery';
import { GetProductParams, GetProductResponse } from '../../types/Api';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default async function getProduct(context: Context, params: GetProductParams, customQuery?: CustomQuery): Promise<GetProductResponse> {
  const { product } = context.extendQuery(customQuery, {
    product: {
      query: defaultQuery,
      variables: {
        productCode: params.id
      }
    }
  });

  return context.client.query({
    query: product.query,
    variables: product.variables,
    fetchPolicy: 'no-cache'
  });
}
