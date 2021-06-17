function findCategoryByCode(category, code) {
  if (category.categoryCode === code) {
    return true;
  }
  return category.childrenCategories.find(childCategory => findCategoryByCode(childCategory, code));
}
// Select category tree by child category code from full Kibo Category Tree
function selectCategoryRootByCode(catgoryCode = '', fullCategoryTree = []) {
  return fullCategoryTree.find(category => findCategoryByCode(category, catgoryCode));
}

export default selectCategoryRootByCode;
