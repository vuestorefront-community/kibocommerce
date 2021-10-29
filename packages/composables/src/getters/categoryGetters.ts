/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { CategoryGetters, AgnosticCategoryTree } from '@vue-storefront/core';
import type { ProductCategory } from '@vue-storefront/kibocommerce-api';
import { RootCategoryParams } from '../types';

export const getCategoryTree = (category: ProductCategory) : AgnosticCategoryTree => {
  const getRoot = (category: ProductCategory): ProductCategory => (category.parentCategory ? getRoot(category.parentCategory) : category);
  const itemToTree = (rootCategory: RootCategoryParams): AgnosticCategoryTree => {
    return {
      id: rootCategory.categoryCode,
      label: rootCategory.content?.name,
      slug: rootCategory.content?.slug,
      items: rootCategory.childrenCategories?.map(itemToTree) || [],
      isCurrent: rootCategory.categoryCode === category.categoryCode,
    };
  };

  if (category) {
    return itemToTree(getRoot(category));
  }

  return {} as AgnosticCategoryTree;
};

export const categoryGetters: CategoryGetters<ProductCategory> = {
  getTree: getCategoryTree,
};

// export default categoryGetters
