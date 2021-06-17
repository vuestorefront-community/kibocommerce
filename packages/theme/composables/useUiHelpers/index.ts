import { getCurrentInstance } from '@vue/composition-api';

const getInstance = () => {
  const vm = getCurrentInstance();
  return vm.$root as any;
};

const useUiHelpers = () => {
  const instance = getInstance();

  const getFacetsFromURL = () => {
    // eslint-disable-next-line
        const { query, params } = instance.$router.history.current;
    const categoryCode = Object.keys(params).reduce((prev, curr) => params[curr] || prev, params.slug_1);

    return {
      categoryCode,
      page: 1
    } as any;
  };

  // eslint-disable-next-line
    const getCatLink = (category): string => {
    // console.warn('[VSF] please implement useUiHelpers.getCatLink.');
    return `/c/${category.slug}/${category.id}`;
  };

  // eslint-disable-next-line
    const changeSorting = (sort) => {
    console.warn('[VSF] please implement useUiHelpers.changeSorting.');

    return 'latest';
  };

  // eslint-disable-next-line
    const changeFilters = (filters) => {
    console.warn('[VSF] please implement useUiHelpers.changeFilters.');
  };

  // eslint-disable-next-line
    const changeItemsPerPage = (itemsPerPage) => {
    console.warn('[VSF] please implement useUiHelpers.changeItemsPerPage.');
  };

  // eslint-disable-next-line
    const setTermForUrl = (term: string) => {
    console.warn('[VSF] please implement useUiHelpers.changeSearchTerm.');
  };

  // eslint-disable-next-line
    const isFacetColor = (facet): boolean => {
    console.warn('[VSF] please implement useUiHelpers.isFacetColor.');

    return false;
  };

  // eslint-disable-next-line
    const isFacetCheckbox = (facet): boolean => {
    console.warn('[VSF] please implement useUiHelpers.isFacetCheckbox.');

    return false;
  };

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
    getSearchTermFromUrl
  };
};

export default useUiHelpers;
