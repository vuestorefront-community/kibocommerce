import gql from 'graphql-tag';
import { CategoryInfo } from '../../fragments';

const query = gql`
query SearchCategories($filter: String) {
    categories(filter: $filter) {
      items {
        ...categoryInfo
        parentCategory {
            ...categoryInfo
            parentCategory {
                ...categoryInfo
                parentCategory {
                    ...categoryInfo
                }
            }
        }
        childrenCategories {
            ...categoryInfo
            childrenCategories {
                ...categoryInfo
                childrenCategories {
                    ...categoryInfo
                }
            }
        }
      }
    }
}
${CategoryInfo}`;

const categoryTreeQuery = gql`
query GetCategoryTree {
    categories: categoriesTree {
      items {
        ...categoryInfo
        childrenCategories {
            ...categoryInfo
            childrenCategories {
                ...categoryInfo
                childrenCategories {
                    ...categoryInfo
                    childrenCategories {
                        ...categoryInfo
                        childrenCategories {
                            ...categoryInfo
                            childrenCategories {
                                ...categoryInfo
                            }
                        }
                    }
                }
            }
        }
      }
    }
}
${CategoryInfo}`;

export default query;

export { categoryTreeQuery };
