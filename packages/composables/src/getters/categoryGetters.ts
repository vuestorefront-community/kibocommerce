import { CategoryGetters, AgnosticCategoryTree } from '@vue-storefront/core';
import { Category } from '@vue-storefront/kibo-api/src/types';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getCategoryTree = (category: any): AgnosticCategoryTree => {

  const getRoot = (category: any): Category => (category.parentCategory ? getRoot(category.parentCategory) : category);
  const itemToTree = (rootCategory: any): AgnosticCategoryTree => {
    return {
      id: rootCategory.categoryCode,
      label: rootCategory.content?.name,
      slug: rootCategory.content?.slug,
      items: rootCategory.childrenCategories.map(itemToTree),
      isCurrent: rootCategory.categoryCode === category.categoryCode
    };
  };

  if (category) {
    return itemToTree(getRoot(category));
  }

  return {} as AgnosticCategoryTree;
};

export const categoryGetters: CategoryGetters<Category> = {
  getTree:getCategoryTree
};

export default categoryGetters;
