import {
  FacetsGetters,
  FacetSearchResult,
  AgnosticCategoryTree,
  AgnosticGroupedFacet,
  AgnosticPagination,
  AgnosticSort,
  AgnosticBreadcrumb,
  AgnosticFacet
} from '@vue-storefront/core';
import { SearchData } from '../types';

import { categoryGetters } from './categoryGetters';
import { buildBreadcrumbs } from '../helpers/buildBreadcrumbs';


const normalizeFacet = (facet) => {

  return {
    type: 'attribute',
    id: facet.value,
    value: facet.filterValue,
    attrName: facet.label,
    selected: facet.isApplied,
    count: facet.count
  }
}
const normalizeFacetGroup = (facets =[]) => {
  return facets.map(facetGroup => {
    return {
      id: facetGroup.label,
      label: facetGroup.label,
      options: facetGroup.values.map(normalizeFacet),
      count: null
    };
  });
};
const getAll = (searchData:SearchData, criteria?: string[]): AgnosticFacet[] => {
  const facets = searchData.data?.facets || [];
  const includedFacets = facets.filter(facet => criteria.includes(facet.field.toLowerCase()));
  return includedFacets.reduce((accum: any[], facetGroup) => {
    return [
      ...accum,
      ...facetGroup.values.map(normalizeFacet)
    ];
  }, []) as AgnosticFacet[];
};

const getGrouped = (searchData:SearchData, criteria?: string[]): AgnosticGroupedFacet[] =>{
  const facets = searchData.data?.facets || [];
  const includedFacets = facets.filter(facet => criteria.includes(facet.field.toLowerCase()))
  return normalizeFacetGroup(includedFacets)
};

const getSortOptions = (searchData:SearchData): AgnosticSort => {
  const options = [
    { type: 'sort', value: 'Default', id: '', count: null},
    { type: 'sort', value: 'Price: Low to High', id: 'price asc', count: null},
    { type: 'sort', value: 'Price: High to Low', id: 'price desc', count: null},
    { type: 'sort', value: 'Latest', id: 'createDate desc', count: null},
    { type: 'sort', value: 'Oldest', id: 'createDate asc', count: null}
  ].map(option => ({...option, selected: option.id === searchData.input?.sort }));

    const selected = options.find(option => option.selected)?.id || ""

    return { options, selected };
};

const getCategoryTree = (searchData:SearchData): AgnosticCategoryTree => {
  if (!searchData.data) {
    return {} as AgnosticCategoryTree;
  }
  return categoryGetters.getTree(searchData.data.categories[0]);
};

const getProducts = (searchData:SearchData): any => {
  return searchData.data?.products;
};

const getPagination = (searchData:SearchData): AgnosticPagination => {
  if (!searchData) {
    return {
      currentPage: 1,
      totalPages: 1,
      totalItems: 0,
      itemsPerPage: 10,
      pageOptions: []
     }
  }

  return {
    currentPage: searchData.input?.page || 1,
    totalPages: Math.ceil(searchData.data?.total / searchData.data?.itemsPerPage) || 1,
    totalItems: searchData.data?.total || 0,
    itemsPerPage: searchData.input?.itemsPerPage || 10,
    pageOptions: searchData.data?.perPageOptions
  };
};

const getBreadcrumbs = (searchData): AgnosticBreadcrumb[] => {
  if (!searchData.data) {
    return [];
  }
  const bcs = [
    { text: 'Home', link: '/'},
    ...buildBreadcrumbs(searchData.data.categories[0]).map(b => ({...b, link: `/c/${b.link}` }))
  ];
  return bcs;
};

export const facetGetters: FacetsGetters<any, any> = {
  getSortOptions,
  getGrouped,
  getAll,
  getProducts,
  getCategoryTree,
  getBreadcrumbs,
  getPagination
};
