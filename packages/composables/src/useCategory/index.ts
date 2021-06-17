import {
  Context,
  useCategoryFactory,
  UseCategoryFactoryParams
} from '@vue-storefront/core';
import type { Category } from '@vue-storefront/kibo-api';
import type {
  UseCategorySearchParams as SearchParams
} from '../types';

const params: UseCategoryFactoryParams<Category, any> = {
  categorySearch: async (context: Context, params) => {
    const { customQuery, ...searchParams } = params;
    return await context.$kibo.api.getCategory(searchParams, customQuery);
  }
};

export const useCategory = useCategoryFactory<Category, SearchParams>(params);
