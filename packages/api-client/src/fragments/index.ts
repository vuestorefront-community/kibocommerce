import { productInfo } from '../api/fragments/product'

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

export const searchFacets = `
fragment searchFacets on pr_Facet {
    label
    field
    values {
        label
        value
        isApplied
        filterValue
        isDisplayed
        count
    }
}`

export const searchResults = `
fragment searchResults on ProductSearchResult {
    totalCount
    pageSize
    pageCount
    startIndex
    items {
        ...productInfo
    }
    facets {
        ...searchFacets
    }
}
${searchFacets}
${productInfo}
`