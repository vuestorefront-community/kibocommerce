function getFacetValueFilter(categoryCode, filters = []) {
  let facetValueFilter = '';
  if (categoryCode) {
    facetValueFilter = `categoryCode:${categoryCode},`;
  }
  return facetValueFilter + filters.join(',');
}

export const buildProductSearchVars = ({
  categoryCode = null,
  pageSize = 5,
  // Filters received from URL for facetFilterList
  filters = {},
  startIndex = 0,
  sort = '',
  search = '',
  // Filter to filter all product list e.g based on categoryCode
  filter = ''
}: {
  categoryCode: null;
  pageSize: number;
  filters: any;
  startIndex: number;
  sort: string;
  search: string;
  filter: string;
}): any => {
  let facetTemplate = '';
  if (categoryCode) {
    facetTemplate = `categoryCode:${categoryCode}`;
    filter = filter || `categoryCode req ${categoryCode}`;
  }
  const facetFilterList = Object.keys(filters)
    .filter((k) => filters[k].length)
    .reduce((accum, k) => {
      return [
        ...accum,
        ...filters[k].map((facetValue) => `Tenant~${k}:${facetValue}`)
      ];
    }, []);

  const facetValueFilter = getFacetValueFilter(categoryCode, facetFilterList);
  return {
    query: search,
    startIndex,
    pageSize,
    sortBy: sort,
    filter,
    facetTemplate,
    facetValueFilter
  };
};
