import { getCurrentInstance } from '@vue/composition-api';

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

const getInstance = () => {
  const vm = getCurrentInstance();
  return vm.$root as any;
};

const reduceFilters = (query) => (prev, curr) => {
  const makeArray = Array.isArray(query[curr]) || nonFilters.includes(curr);

  return {
    ...prev,
    [curr]: makeArray ? query[curr] : [query[curr]],
  };
};

const getFiltersDataFromUrl = (context, onlyFilters) => {
  const { query } = context.$router.history.current;
  return Object.keys(query)
    .filter((f) =>
      onlyFilters ? !nonFilters.includes(f) : nonFilters.includes(f)
    )
    .reduce(reduceFilters(query), {});
};

const useUiHelpers = (): uiHelpersReturnType => {
  const instance = getInstance();

  const getFacetsFromURL = () => {
    // eslint-disable-next-line
    const { query, params } = instance.$router.history.current;
    const categoryCode = Object.keys(params).reduce(
      (prev, curr) => params[curr] || prev,
      params.slug_1
    );
    const filters = getFiltersDataFromUrl(instance, true);

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
    const { query } = instance.$router.history.current;
    instance.$router.push({ query: { ...query, sort } });
  };

  const changeFilters = (filters: any) => {
    instance.$router.push({
      query: {
        ...getFiltersDataFromUrl(instance, false),
        ...filters,
      },
    });
  };

  const changeItemsPerPage = (itemsPerPage: number) => {
    instance.$router.push({
      query: {
        ...getFiltersDataFromUrl(instance, false),
        itemsPerPage,
      },
    });
  };

  const setTermForUrl = (term: string) => {
    instance.$router.push({
      query: {
        ...getFiltersDataFromUrl(instance, false),
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
