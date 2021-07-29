import {
  Context,
  useProductFactory,
  UseProductFactoryParams
} from '@vue-storefront/core';
import type { Product } from '@vue-storefront/<% INTEGRATION %>-api';
import type {
  UseProductSearchParams as SearchParams
} from '../types';

const params: UseProductFactoryParams<ProductsResponse, any> = {
  productsSearch: async (context: Context, params: ProductsSearchParams): Promise<ProductsResponse> => {
    const { customQuery, ...searchParams } = params;

    const productResponse = await context.$kibo.api.getProduct(searchParams, customQuery);

    const products = {
      data: [],
      total: 0
    };

    if ('productSearchResult' in productResponse.data) {
      products.data = productResponse.data.productSearchResult.items,
      products.total = productResponse.data.productSearchResult.totalCount;
    }

    if ('product' in productResponse.data) {
      products.data = [productResponse.data.product],
      products.total = 1;
    }

    if ('products' in productResponse.data) {
      products.data = productResponse.data.products.items,
      products.total = productResponse.data.products.totalCount;
    }

    return products;
  }
};

export const useProduct = useProductFactory<Product, SearchParams>(params);
