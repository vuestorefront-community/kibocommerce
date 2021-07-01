export const CategoryInfo = `
fragment categoryInfo on PrCategory {
    categoryId
    categoryCode
    content {
        name
        slug
        description
    }
}`;
