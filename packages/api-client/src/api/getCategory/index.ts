import { CustomQuery, Context } from '@vue-storefront/core';
import defaultQuery, { categoryTreeQuery } from './defaultQuery';
import { selectCategoryFromTree } from './_utils';
import { GetCategoryParams, GetCategoryResponse } from '../../types/Api';

function buildCategorySearchVars(params) {
  let filter = '';
  if (params.slug) {
    filter = `content.slug eq ${params.slug}`;
  } else if (params.id) {
    filter = `categoryCode eq ${params.id}`;
  }
  return { filter };
}

export default async function getCategory(context:Context, params: GetCategoryParams, customQuery?: CustomQuery): Promise<GetCategoryResponse> {

  if (params?.slug) {
    const defaultVariables = buildCategorySearchVars(params);
    const { categories } = context.extendQuery(customQuery,
      { categories: { query: defaultQuery, variables: defaultVariables } }
    );

    const request = await context.client.query({
      query: categories.query,
      variables: categories.variables,
      fetchPolicy: 'no-cache'
    });
    return request;

  } else {
    // fetch entire category tree
    const request = await context.client.query({
      query: categoryTreeQuery,
      fetchPolicy: 'no-cache'
    });
    const categoryCode = params?.id || params?.categoryCode;
    const categoryTree = request.data?.categories?.items;

    // if searching by category code, build category from tree for parent/children data
    if (categoryCode && categoryTree) {
      const categoryTree = request.data?.categories?.items;
      const category = selectCategoryFromTree(categoryTree, categoryCode);
      request.data.categories.items = category ? [category] : [];
    }

    return request;
  }
}
