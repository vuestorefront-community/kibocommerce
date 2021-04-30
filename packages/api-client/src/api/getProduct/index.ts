import { CustomQuery, ProductsSearchParams, Context } from '@vue-storefront/core';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default async function getProduct(context: Context, params: ProductsSearchParams, customQuery?: CustomQuery): Promise<any> {
  try {
    const productsClient = require('mozu-node-sdk/clients/commerce/catalog/storefront/product')(context.config);
    if (typeof params.catId !== 'undefined') {
      const ret = await productsClient.getProducts({
        filter: `categoryId req ${params.catId[0]} and productCode ne '${params.id}'`,
        pageSize: params.limit
      });
      return ret.items;
    } else if (typeof params.id !== 'undefined') {
      const ret = await productsClient.getProduct({
        productCode: params.id
      });
      return [ret];
    } else {
      console.log(params);
    }
  } catch (ex) {
    return ex;
  }
}

