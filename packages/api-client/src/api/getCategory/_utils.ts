/*
* Kibo category api currently does not fetch complete parent/children category relationship
* This util is a work around
* it finds (by cat code) and builds the category with parent/children using full cat tree
* TODO: Review with kibo team on including this data
*/

function addParent(category, newParent) {
  if (category.parentCategory) {
    return addParent(category.parentCategory, newParent);
  }
  category.parentCategory = Object.assign({}, newParent);
}

export const selectCategoryFromTree = (categoryTree:Array<any> = [], categoryCode:string):any => {

  let targetCategory;
  const findCategoryById = (category, code) => {
    if (category.categoryCode === code) {
      targetCategory = Object.assign({}, category);
      return true;
    }
    return category.childrenCategories.find(childCategory => {
      const found = findCategoryById(childCategory, code);
      if (found) {
        addParent(targetCategory, category);
        return true;
      }
    });
  };
  for (const rootCategory of categoryTree) {
    if (findCategoryById(rootCategory, categoryCode)) {
      continue;
    }
  }
  return targetCategory;
};
