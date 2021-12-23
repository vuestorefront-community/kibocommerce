import { useRoute, useRouter } from '@nuxtjs/composition-api';

const nonFilters = ['page', 'sort', 'phrase', 'itemsPerPage'];

interface uiHelpersReturnType {
  getFacetsFromURL: any;
  getCatLink: any;
  changeSorting: any;
  changeFilters: any;
  changeItemsPerPage: any;
  setTermForUrl: any;
  isFacetColor: any;
  isFacetCheckbox: any;
  getSearchTermFromUrl: any;
}

const reduceFilters = (query) => (prev, curr) => {
  const makeArray = Array.isArray(query[curr]) || nonFilters.includes(curr);

  return {
    ...prev,
    [curr]: makeArray ? query[curr] : [query[curr]],
  };
};

const getFiltersDataFromUrl = (query, onlyFilters) => {
  return Object.keys(query)
    .filter((f) =>
      onlyFilters ? !nonFilters.includes(f) : nonFilters.includes(f)
    )
    .reduce(reduceFilters(query), {});
};

const useUiHelpers = (): uiHelpersReturnType => {
  const route = useRoute();
  const router = useRouter();
  const { query, params }: { query:any, params: any} = route.value;
  const getFacetsFromURL = () => {
    // eslint-disable-next-line
    const categoryCode = Object.keys(params).reduce(
      (prev, curr) => params[curr] || prev,
      params.slug_1
    );
    const filters = getFiltersDataFromUrl(query, true);

    return {
      categoryCode,
      page: parseInt(query.page, 10) || 1,
      itemsPerPage: parseInt(query.itemsPerPage, 10) || 20,
      phrase: query.phrase,
      filters,
      sort: query.sort,
    } as any;
  };

  // eslint-disable-next-line
  const getCatLink = (category): string => {
    return `/c/${category.slug}/${category.id}`;
  };

  const changeSorting = (sort: string) => {
    router.push({ query: { ...query, sort } });
  };

  const changeFilters = (filters: any) => {
    router.push({
      query: {
        ...getFiltersDataFromUrl(query, false),
        ...filters,
      },
    });
  };

  const changeItemsPerPage = (itemsPerPage: number) => {
    router.push({
      query: {
        ...getFiltersDataFromUrl(query, false),
        itemsPerPage,
      },
    });
  };

  const setTermForUrl = (term: string) => {
    router.push({
      query: {
        ...getFiltersDataFromUrl(query, false),
        phrase: term || undefined,
      },
    });
  };

  const isFacetColor = (facet): boolean =>
    facet.field && facet.field.includes('color');

  // eslint-disable-next-line
  const isFacetCheckbox = (facet): boolean => false;

  const getSearchTermFromUrl = () => {
    console.warn('[VSF] please implement useUiHelpers.getSearchTermFromUrl.');
  };

  return {
    getFacetsFromURL,
    getCatLink,
    changeSorting,
    changeFilters,
    changeItemsPerPage,
    setTermForUrl,
    isFacetColor,
    isFacetCheckbox,
    getSearchTermFromUrl,
  };
};

export default useUiHelpers;
