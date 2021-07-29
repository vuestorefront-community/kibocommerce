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

    const categoryResponse = await context.$kibo.api.getCategory(searchParams, customQuery);

    let categories;
    if ('categories' in categoryResponse.data) {
      categories = categoryResponse.data.categories.items;
    }

    return categories;
  }
};

export const useCategory = useCategoryFactory<Category, SearchParams>(params);
