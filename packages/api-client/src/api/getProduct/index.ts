import { CustomQuery, ProductsSearchParams, Context } from '@vue-storefront/core';
import { KiboApolloClient } from 'kibo.apollo.typescript.client/';
import getProductsQuery from './getProducts';
import getProductQuery from './getProduct';
import gql from 'graphql-tag';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default async function getProduct(context: Context, params: ProductsSearchParams, customQuery?: CustomQuery): Promise<any> {
  try {
    const client = context.client as KiboApolloClient;
    let extendable = {};
    let key = '';
    if (typeof params.catId !== 'undefined') {
      key = 'products';
      extendable = {
        products: {
          variables: {
            filter: `${(params.catId[0]) !== null ? 'categoryId req ' + params.catId[0] + ' and ' : ''}productCode ne '${params.id}'`,
            pageSize: params.limit
          },
          query: getProductsQuery
        }
      };
    } else if (typeof params.id !== 'undefined') {
      key = 'product';
      extendable = {
        product: {
          variables: {
            productCode: params.id
          },
          query: getProductQuery
        }
      };
    } else {
      console.log(params);
    }
    const newQueryObj = context.extendQuery(
      customQuery, extendable
    )[key];

    try {
      const request = await client.query({
        query: gql`${newQueryObj.query}`,
        variables: newQueryObj.variables,
        fetchPolicy: 'no-cache'
      });
      return key === 'products' ? request.data.products.items : [request.data.product];
    } catch (error) {
      throw error.graphQLErrors?.[0] || error.networkError?.result || error;
    }
  } catch (ex) {
    return ex;
  }
}

