export const CategoryInfo = `
fragment categoryInfo on Category {
    categoryId
    categoryCode
    content {
        name
        slug
        description
    }
}`;
