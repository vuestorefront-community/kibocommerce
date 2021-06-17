import {
  Context,
  useFacetFactory,
  FacetSearchResult
} from '@vue-storefront/core';
import type {
  UseFacetSearchParams as SearchParams
} from '../types';

const factoryParams = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  search: async (context: Context, params: FacetSearchResult<any>) => {
    const categoryResponse = await context.$kibo.api.getCategory({categoryCode: params.input.categoryCode, params});
    const categories = categoryResponse.data?.categories?.items;
    return {
      categories
    };
  }
};

export const useFacet = useFacetFactory<SearchParams>(factoryParams);
