import { CategoryGetters, AgnosticCategoryTree } from '@vue-storefront/core';
import type { ProductCategory } from '@vue-storefront/kibocommerce-api';

export const getCategoryTree = (category: any): AgnosticCategoryTree => {

  const getRoot = (category: any): ProductCategory => (category.parentCategory ? getRoot(category.parentCategory) : category);
  const itemToTree = (rootCategory: any): AgnosticCategoryTree => {
    return {
      id: rootCategory.categoryCode,
      label: rootCategory.content?.name,
      slug: rootCategory.content?.slug,
      items: rootCategory.childrenCategories?.map(itemToTree) || [],
      isCurrent: rootCategory.categoryCode === category.categoryCode
    };
  };

  if (category) {
    return itemToTree(getRoot(category));
  }

  return {} as AgnosticCategoryTree;
};

export const categoryGetters: CategoryGetters<ProductCategory> = {
  getTree: getCategoryTree
};

// export default categoryGetters