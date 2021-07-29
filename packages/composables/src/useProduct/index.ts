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

    return await context.$kibo.api.getProduct(searchParams, customQuery);
  }
};

export const useProduct = useProductFactory<Product, SearchParams>(params);
