import {
  Context,
  useFacetFactory,
  FacetSearchResult,
} from '@vue-storefront/core';

const ITEMS_PER_PAGE = [20, 40, 100];

const factoryParams = {
  search: async (context: Context, params: FacetSearchResult<any>) => {
    const categoryResponse = await context.$kibo.api.getCategory({
      categoryCode: params.input.categoryCode,
    });
    let categories;

    if ('categories' in categoryResponse.data) {
      categories = categoryResponse.data.categories.items;
    }
    const filters = params.input.filters || [];
    const itemsPerPage = params.input.itemsPerPage || ITEMS_PER_PAGE[0];
    const startIndex = (params.input.page - 1) * itemsPerPage;
    const sort = params.input.sort;

    const productSearchResponse = await context.$kibo.api.searchProducts({
      categoryCode: params.input.categoryCode,
      pageSize: itemsPerPage,
      startIndex,
      filters,
      sort,
    });

    let productSearchResult;
    if ('products' in productSearchResponse.data) {
      productSearchResult = productSearchResponse.data?.products || {};
    }

    const { facets, items, totalCount } = productSearchResult;

    return {
      categories,
      facets,
      itemsPerPage,
      sort,
      products: items,
      total: totalCount,
      perPageOptions: ITEMS_PER_PAGE,
    };
  },
};

export const useFacet = useFacetFactory<any>(factoryParams);
